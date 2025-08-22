package Breadboxd.app.auth;

import Breadboxd.app.config.JwtService;
import Breadboxd.app.user.Role;
import Breadboxd.app.user.User;
import Breadboxd.app.user.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.WebUtils;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    private void addRefreshTokenCookie(HttpServletResponse response, String refreshToken) {
        ResponseCookie cookie = ResponseCookie.from("refreshToken", refreshToken)
                .httpOnly(true)
                .secure(false)
                .path("/api/public/auth/refresh")
                .maxAge(9 * 24 * 60 * 60)
                .sameSite("Strict")
                .build();

        response.addHeader("Set-Cookie", cookie.toString());
    }

    public AuthenticationResponse register(
            RegisterRequest request,
            HttpServletResponse response
    ) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .username(request.getUsername())
                .email(request.getEmail())
                .role(Role.USER)
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        userRepository.save(user);
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("roles", user.getRole().name());

        var newAccessToken = jwtService.generateToken(extraClaims, user);
        var newRefreshToken = jwtService.generateRefreshToken(user);

        addRefreshTokenCookie(response, newRefreshToken);

        long nowSec = System.currentTimeMillis() / 1000; // current time in seconds

        long accessTokenExpiresIn = (jwtService.extractExpiration(newAccessToken).getTime() / 1000) - nowSec;

        return AuthenticationResponse.builder()
                .accessToken(newAccessToken)
                .accessTokenExpiresIn(accessTokenExpiresIn)
                .build();
    }

    public AuthenticationResponse authenticate(
            AuthenticationRequest request,
            HttpServletResponse response
    ) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()

                )
        );

        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found"));

        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("roles", user.getRole().name());

        var newAccessToken = jwtService.generateToken(extraClaims, user);
        var newRefreshToken = jwtService.generateRefreshToken(user);

        addRefreshTokenCookie(response, newRefreshToken);

        long nowSec = System.currentTimeMillis() / 1000; // current time in seconds

        long accessTokenExpiresIn = (jwtService.extractExpiration(newAccessToken).getTime() / 1000) - nowSec;

        return AuthenticationResponse.builder()
                .accessToken(newAccessToken)
                .accessTokenExpiresIn(accessTokenExpiresIn)
                .build();
    }

    public AuthenticationResponse refresh(
            HttpServletRequest request,
            HttpServletResponse response
    ){
        var cookie = WebUtils.getCookie(request, "refreshToken");

        if (cookie == null){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Missing Refresh Token");
        }

        String refreshToken = cookie.getValue();
        String username = jwtService.extractUsername(refreshToken);

        if (username == null){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid Refresh Token");
        }

        var user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found"));

        if (!jwtService.isTokenValid(refreshToken, user)){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid Refresh Token");
        }

        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("roles", user.getRole().name());

        var newAccessToken = jwtService.generateToken(extraClaims, user);
        var newRefreshToken = jwtService.generateRefreshToken(user);

        addRefreshTokenCookie(response, newRefreshToken);

        long nowSec = System.currentTimeMillis() / 1000; // current time in seconds

        long accessTokenExpiresIn = (jwtService.extractExpiration(newAccessToken).getTime() / 1000) - nowSec;

        return AuthenticationResponse.builder()
                .accessToken(newAccessToken)
                .accessTokenExpiresIn(accessTokenExpiresIn)
                .build();
    }

    public ResponseEntity<Void> logout(
            HttpServletResponse response
    ) {
        Cookie cookie = new Cookie("refreshToken", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(0);


        response.addCookie(cookie);

        return ResponseEntity.noContent().build();
    }
}

