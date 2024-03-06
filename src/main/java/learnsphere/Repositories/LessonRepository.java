package learnsphere.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import learnsphere.Entity.Lessons;

public interface LessonRepository extends JpaRepository<Lessons, Integer>{
	List<Lessons> findByName(String name);
	List<Lessons> findByCoursename(String coursename);
}
