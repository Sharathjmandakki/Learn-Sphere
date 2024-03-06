package learnsphere.Entity;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Lessons {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int lessonid;
	private String name;
	private String topic;
	private String vedio;
	private String attachment;
	private String coursename;
	private String description;	
	private List<String> discussion;

	public Lessons(int lessonid, String lessonnumber, String name, String topic, String vedio, String attachment,String coursename,String description) {
		super();
		this.lessonid = lessonid;
		this.name = name;
		this.topic = topic;
		this.vedio = vedio;
		this.attachment = attachment;
		this.coursename=coursename;
		this.description=description;
	}

	public Lessons() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getLessonid() {
		return lessonid;
	}

	public void setLessonid(int lessonid) {
		this.lessonid = lessonid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public String getVedio() {
		return vedio;
	}

	public void setVedio(String vedio) {
		this.vedio = vedio;
	}

	public String getAttachment() {
		return attachment;
	}

	public void setAttachment(String attachment) {
		this.attachment = attachment;
	}

	public String getCoursename() {
		return coursename;
	}

	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<String> getDiscussion() {
		return discussion;
	}

	public void setDiscussion(List<String> discussion) {
		this.discussion = discussion;
	}

	@Override
	public String toString() {
		return "Lessons [lessonid=" + lessonid + ", name=" + name + ", topic=" + topic + ", vedio=" + vedio
				+ ", attachment=" + attachment + ", coursename=" + coursename + ", discussion=" + discussion + "]";
	}
}
