package UTD.demo.Users;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class Users {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long id;
    private String username;
    private Integer age;
    private String email;
    private String cuisine;

    public Users() {
    }

    public Users(Long id, String username, Integer age, String email, String cuisine) {
        this.id = id;
        this.username = username;
        this.age = age;
        this.email = email;
        this.cuisine = cuisine;
    }

    public Users(String username, Integer age, String email, String cuisine) {
        this.username = username;
        this.age = age;
        this.email = email;
        this.cuisine = cuisine;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", age=" + age +
                ", email='" + email + '\'' +
                ", cuisine='" + cuisine + '\'' +
                '}';
    }
}
