package MeNMyKup.app.demo;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.locks.ReentrantLock;

@RestController
@RequestMapping("/api/v1/demo")
public class DemoController {

    @GetMapping()
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("if looks could kill, from a secured endpoint");
    }
}
