package learnsphere.Services;

import java.util.List;

import learnsphere.Entity.Courses;

public interface CoursesInterface {
List<Courses> viewAllCourses();
Courses viewCoursesByName(String name);
List<Courses> coursesUplodByUser(String user);
String addCourses(Courses c);
}
