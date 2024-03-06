package learnsphere.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import learnsphere.Controller.UserController;
import learnsphere.Entity.Courses;
import learnsphere.Repositories.CourseRepository;

@Service
public class CourseServices implements CoursesInterface {
	@Autowired
	CourseRepository cr;

	@Override
	public List<Courses> viewAllCourses() {
		// TODO Auto-generated method stub
		return cr.findAll();
	}

	@Override
	public Courses viewCoursesByName(String name) {
		// TODO Auto-generated method stub
		return cr.findByName(name);
	}

	@Override
	public List<Courses> coursesUplodByUser(String user) {
		return cr.findByUploadby(user);
	}	
	
	@Override
	public String addCourses(Courses c) {
		System.out.println(c);
		if(viewCoursesByName(c.getName())!=null) {
			return "courses name is already present".toUpperCase();
		}
		cr.save(c);
		return "added";
	}

	public String updateCourses(Courses c) {
		System.out.println("started");
		Courses co=cr.findById(c.getCourseid()).get();
		System.out.println(co);
		System.out.println(c);
		if(co.getPrice().equals(c.getPrice()) && co.getName().equals(c.getName())) {
			co.setDescription(c.getDescription());
			co.setPrerequisite(c.getPrerequisite());
			co.setCategory(c.getCategory());
			co.setUrl(c.getUrl());
			cr.save(co);

			System.out.println("ended");
			return "updated";
		}else {
			return "not updated";
		}
	}
}
