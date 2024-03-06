package learnsphere.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import learnsphere.Entity.Courses;
import learnsphere.Entity.Lessons;
import learnsphere.Repositories.CourseRepository;
import learnsphere.Repositories.LessonRepository;

@Service
public class LessonServices implements LessonInterface {
	@Autowired
	LessonRepository lr;
	@Autowired
	CourseRepository cr;
	@Autowired
	CourseServices cs;

	@Override
	public List<Lessons> SearchByLessonName(String name) {
		// TODO Auto-generated method stub
		return lr.findByName(name);
	}
	@Override
	public Lessons getLesson(Lessons l) {
		// TODO Auto-generated method stub
		return lr.findById(l.getLessonid()).get();
	}

	@Override
	public String addLesson(Lessons l) {
		lr.save(l);
		Courses c = cs.viewCoursesByName(l.getCoursename());
		List<Lessons> lc = c.getLessons();
		lc.add(l);
		c.setLessons(lc);
		cr.save(c);
		return "added";
	}

	public String addMessage(Lessons l) {
		// TODO Auto-generated method stub
		Lessons lesson = lr.findById(l.getLessonid()).get();
		if (lesson.getCoursename().equals(l.getCoursename())) {
			List<String> com = new ArrayList<>();
			if (lesson.getDiscussion() != null) {
				com.addAll(lesson.getDiscussion());
			}
			com.add(l.getName());
//			lesson.setDiscussion(null);
			lesson.setDiscussion(com);
			lr.save(lesson);
			return "sent";
		} else {
			return "failed";
		}
	}
	public List<String> getMessage(Lessons l) {
		// TODO Auto-generated method stub
		return lr.findById(l.getLessonid()).get().getDiscussion();
	}

	public String updateLesson(Lessons l) {
		Lessons ul=lr.findById(l.getLessonid()).get();
		
		if(ul.getLessonid()==l.getLessonid()&&ul.getCoursename().equals(l.getCoursename())&&ul.getName().equals(l.getName())) {
			ul.setAttachment(l.getAttachment());
			ul.setVedio(l.getVedio());
			ul.setDescription(l.getDescription());
			ul.setTopic(l.getTopic());
			lr.save(ul);
			return "updated";
		}else {

			return "error in update";	
		}		
	}
}
