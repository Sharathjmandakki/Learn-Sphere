package learnsphere.Entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
@Entity
public class Users {
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	int userid;
	String username;
	String email;
	String password;
	String role;
	@ManyToMany
	List<Courses> purchasedCourses;

	public Users() {
		// TODO Auto-generated constructor stub
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Courses> getPurchasedCourses() {
		return purchasedCourses;
	}

	public void setPurchasedCourses(List<Courses> purchasedCourses) {
		this.purchasedCourses = purchasedCourses;
	}

	@Override
	public String toString() {
		return "Users [username=" + username + ", email=" + email + ", password=" + password + ", role=" + role + "]";
	}

	public Users(String username, String email, String password, String role) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.role = role;
	}

}
