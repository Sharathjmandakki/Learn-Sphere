package learnsphere.Controller;

import java.util.List;

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
import learnsphere.Services.LessonServices;
@CrossOrigin("*")
@RestController
@RequestMapping
public class LessonController {
	@Autowired
	LessonServices ls;
	@GetMapping("/searchLessons")
	public List<Lessons> SeearchByLessons(String number){
		List<Lessons> lessons=ls.SearchByLessonName(number);
		lessons.addAll(ls.SearchByLessonName(number));
		return lessons;
	}
	@PostMapping("/getLesson")
	public Lessons getLesson(@RequestBody Lessons l) {
		return ls.getLesson(l);
	}
	
	@PostMapping("/addlesson")
	public String addLesson(@RequestBody Lessons l) {
		System.out.println(l);
		return ls.addLesson(l);
	}
	
	@PutMapping("/message")
	public String addMessage(@RequestBody Lessons l) {
		System.out.println(l);
		return ls.addMessage(l);
	}
	@GetMapping("/read")
	public List<String> getMessage(@RequestBody Lessons l ) {
		return ls.getMessage(l);
	}
	
	@PutMapping("/updatelesson")
	public String UpdateLesson(@RequestBody Lessons c) {
		return ls.updateLesson(c);
	}
}
