package MeNMyKup.app.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/public/users/check-username")
    public ResponseEntity<Boolean> checkUsernameUnique(@RequestParam String username){
        boolean exists = userRepository.findByUsername(username).isPresent();
        return ResponseEntity.ok(exists);
    }

    @GetMapping("/public/users/check-email")
    public ResponseEntity<Boolean> checkEmailUnique(@RequestParam String email){
        System.out.println("Received request to check email: " + email);
        boolean exists = userRepository.findByEmail(email).isPresent();
        return ResponseEntity.ok(exists);
    }
}
