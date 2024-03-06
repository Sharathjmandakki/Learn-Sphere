package learnsphere.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import learnsphere.Entity.Courses;
import learnsphere.Entity.Users;
import learnsphere.Entity.user;
import learnsphere.Repositories.UserRepository;
@Service
public class UserServices implements UsersInterface {
	@Autowired
	UserRepository ur;

	@Override
	public String addUser(Users u) {
		// TODO Auto-generated method stub
		if (ur.findByEmail(u.getEmail()) != null) {
			return "Try to login this email is already present.";
		} else if (ur.findByUsername(u.getUsername()) != null) {
			return "Try to use another username this user name is already present";
		} else {
			ur.save(u);
			return "user added";
		}
	}

	@Override
	public String loginByUsername(String username, String password) {
		// TODO Auto-generated method stub
		Users u = ur.findByUsername(username);
		if (u.getPassword().equals(password)) {
			return u.getRole();
		} else {
			return "incorrect password";
		}

	}

	@Override
	public String loginByEmail(String email, String password) {
		// TODO Auto-generated method stub
		Users u = ur.findByEmail(email);
		System.out.println(u.getPassword()+" "+password);
		if (u.getPassword().equals(password)) {
			return u.getRole();
		} else {
			return loginByUsername(email, password);
		}

	}

	@Override
	public String updatePassword(String email, String password) {
		Users u = getUser(email);
		if(u==null) {
			return "not a user of Learn Sphere";
		}
		if (u.getPassword().equals(password)) {
			return "your password same as old password please try to login";
		} else {
			// TODO Auto-generated method stub
			u.setPassword(password);
			ur.save(u);
			return "updated";
		}
	}

	@Override
	public Users getUser(String email) {
		// TODO Auto-generated method stub
		Users u = ur.findByEmail(email);
		if (u == null) {
			u = ur.findByUsername(email);
		}
		return u;
	}

	public List<Courses> coursesPurchasedByUser(String user) {
		Users u=getUser(user);
		return u.getPurchasedCourses();
	}

	public String findgetuser(Users u) {
		// TODO Auto-generated method stub
		System.out.println(u.getEmail());
		try {
			Users usr=ur.findByEmail(u.getEmail());
			return usr.getUsername();
		}catch(Exception e) {
			return "not found";
		}
		
	}
	
}
