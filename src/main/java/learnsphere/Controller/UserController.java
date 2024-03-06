package learnsphere.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
import learnsphere.Entity.*;
import learnsphere.Services.UserServices;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin("*")
@RequestMapping
@RestController
public class UserController {
	@Autowired
	UserServices us;
	HttpSession hs;
	@PostMapping("/adduser")
	public String addUser(@RequestBody Users u) {
		return us.addUser(u);
	}
	
	@PostMapping("/login")
	public String Login(@RequestBody Users u,HttpSession hs) {
		this.hs=hs;
		try {
			hs.setAttribute("email", u.getEmail());
			return us.loginByEmail(u.getEmail(), u.getPassword());
		}catch(Exception e) {
			try {
				hs.setAttribute("username", u.getEmail());
				return us.loginByUsername(u.getEmail(), u.getPassword());
			}catch (Exception e1) {
				return "user not found";
			}
		}
	}	
	@PostMapping("/update")
	public String UpdatePassword(@RequestParam String email,@RequestParam String password) {
		//TODO: process POST request
		return us.updatePassword(email, password);
	}
	
	public String user() {
		String uplodby="";
		if(hs==null) {
			return null;
		}
		if(uplodby==null || uplodby==""|| hs.getAttribute("email")!=null) {
			uplodby=us.getUser(hs.getAttribute("email").toString()).getUsername();
		}else {
			uplodby=hs.getAttribute("username").toString();
		}
		return uplodby;
	}
	
	@GetMapping("/user")
	public String UserIsTeacher() {
		return user();
	}
	
	
	@GetMapping("/loginuser")
	public Users getusers() {
		return us.getUser(user());
	}
	
	@PostMapping("/getname")
	public String getuser(@RequestBody Users u) {
		return us.findgetuser(u);
	}
	@PutMapping("/update")
	public String UpdateUser(@RequestBody Users u) {
		return us.updatePassword(u.getEmail(), u.getPassword());
	}
	
	@GetMapping("/logout")
	public void logOut() {
		hs.removeAttribute("email");
	}
}
