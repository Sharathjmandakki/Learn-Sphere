package learnsphere.Services;

import learnsphere.Entity.Users;

public interface UsersInterface {
	String addUser(Users u);
	String loginByUsername(String username,String password); //these return role of user teacher or student
	String loginByEmail(String email,String password); //these return role of user teacher or student
	Users getUser(String email);
	String updatePassword(String email,String password);
}
