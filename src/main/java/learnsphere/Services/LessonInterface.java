package learnsphere.Services;

import java.util.List;

import learnsphere.Entity.Lessons;

public interface LessonInterface {
List<Lessons> SearchByLessonName(String name);
String addLesson(Lessons l);
Lessons getLesson(Lessons l);
}
