package Breadboxd.app.auth;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/public/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody @Valid RegisterRequest request,
            HttpServletResponse response
    ){
        AuthenticationResponse authenticationResponse = authService.register(request, response);
        return ResponseEntity.ok(authenticationResponse);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody @Valid AuthenticationRequest request,
            HttpServletResponse response
    ){
        AuthenticationResponse authenticationResponse = authService.authenticate(request, response);
        return ResponseEntity.ok(authenticationResponse);
    }


    @PostMapping("/refresh")
    public ResponseEntity<AuthenticationResponse> refresh(
            HttpServletRequest request,
            HttpServletResponse response
    ) {
        AuthenticationResponse newTokens = authService.refresh(request, response);
        return ResponseEntity.ok(newTokens);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(
            HttpServletResponse response
    ) {
        return authService.logout(response);
    }
}


