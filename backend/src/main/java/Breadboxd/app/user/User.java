package Breadboxd.app.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cooks")

public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(name = "username",
            nullable = false,
            columnDefinition = "TEXT",
            unique = true)
    private String username;

    @Column(name = "firstname",
            nullable = false,
            columnDefinition = "TEXT")
    private String firstname;

    @Column(name = "lastname",
            nullable = false,
            columnDefinition = "TEXT")
    private String lastname;

    @Column(name = "email",
            nullable = false,
            columnDefinition = "TEXT",
            unique = true)
    private String email;

    @Column(name = "password",
            nullable = false,
            columnDefinition = "TEXT",
            unique = true)
    private String password;

    @Enumerated
    @Column(name = "role",
            nullable = false)
    private Role role;


    @OneToOne(mappedBy = "user", orphanRemoval = true, cascade = CascadeType.ALL)
    private UserImage userImage;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
