package learnsphere.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import learnsphere.Entity.Courses;
import learnsphere.Entity.Lessons;
import learnsphere.Services.CourseServices;
import learnsphere.Services.UserServices;
@CrossOrigin("*")
@RequestMapping
@RestController
public class CourseController {
	@Autowired
	CourseServices cs;
	@Autowired
	UserController uc;
	@Autowired
	UserServices us;
	@GetMapping("/viewAll")
	public List<Courses> viewAllCourses(){
		return cs.viewAllCourses();
	}
	@PostMapping("/addcourses")
	public String addCourses(@RequestBody Courses c) {
		if(c.getUploadby()==null) {
			c.setUploadby(uc.user());
		}
		if(Integer.parseInt(c.getPrice())==0) {
			c.setPay(true);
		}
		return cs.addCourses(c);
	}
	 
	@PostMapping("/search")
	public List<Courses> Search(@RequestBody Courses c){
		List<Courses> searchresult=cs.coursesUplodByUser(c.getName());
		 if(cs.viewCoursesByName(c.getName())!=null) {
			 searchresult.add(cs.viewCoursesByName(c.getName()));
		 }
		return searchresult;
	}
	@GetMapping("/viewAllLesson")
	public List<Lessons> viewAllLesson(@RequestParam String name) {
		return cs.viewCoursesByName(name).getLessons();
	}
	
	@GetMapping("/mycources")
	public List<Courses> viewMyCources(){
		if(uc.user()==null) {
			return cs.coursesUplodByUser("test1");
		}else {
		return cs.coursesUplodByUser(uc.user());
		}
	}
	
	@GetMapping("/purchased")
	public List<Courses> purchasedCourses(){
		if(uc.user()==null) {
			return null;
		}else {
			return us.coursesPurchasedByUser(uc.user());
		}
	}
	
	@PutMapping("/updatecourses")
	public String UpdateCourses(@RequestBody Courses c) {
		return cs.updateCourses(c);
	}
	
}
