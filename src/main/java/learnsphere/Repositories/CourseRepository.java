package learnsphere.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import learnsphere.Entity.Courses;

public interface CourseRepository extends JpaRepository<Courses, Integer> {
Courses findByName(String name);
List<Courses> findByUploadby(String uploadby);
List<Courses> findByCategory(String category);
}
