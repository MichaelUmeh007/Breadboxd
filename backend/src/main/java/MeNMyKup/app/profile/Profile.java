package MeNMyKup.app.profile;

import MeNMyKup.app.user.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(
            name = "dob",
            columnDefinition = "DATE",
            nullable = true
    )
    private LocalDate dob;

    @Column(
            name = "bio",
            columnDefinition = "TEXT",
            nullable = true,
            length = 500
    )
    private String bio;

    @Enumerated
    @Column(
            name = "cuisine",
            nullable = true
    )
    private Cuisine cuisine;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
