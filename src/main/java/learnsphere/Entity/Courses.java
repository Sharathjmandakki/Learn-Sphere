package learnsphere.Entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;

@Entity
public class Courses {
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	int courseid;
	String name;
	String prerequisite;
	@Lob
	@Column(length = 10000)
	String description;
	String price;
	String category;
	String uploadby;
	int rating;
	String url;
	@OneToMany
	List<Lessons> lessons;
	boolean pay;

	public Courses(int courseid, String name, String prerequisite, String description, String price,
			String category,String uploadby,List<Lessons> lessons,String url) {
		super();
		this.courseid = courseid;
		this.name = name;
		this.prerequisite = prerequisite;
		this.description = description;
		this.price = price;
		this.lessons = lessons;
		this.uploadby=uploadby;
		this.category=category;
		this.url=url;
	}

	public Courses() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getCourseid() {
		return courseid;
	}

	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrerequisite() {
		return prerequisite;
	}

	public void setPrerequisite(String prerequisite) {
		this.prerequisite = prerequisite;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public List<Lessons> getLessons() {
		return lessons;
	}

	public void setLessons(List<Lessons> lessons) {
		this.lessons = lessons;
	}

	public String getUploadby() {
		return uploadby;
	}

	public void setUploadby(String uploadby) {
		this.uploadby = uploadby;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public boolean isPay() {
		return pay;
	}

	public void setPay(boolean pay) {
		this.pay = pay;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Courses [courseid=" + courseid + ", name=" + name + ", prerequisite=" + prerequisite + ", description="
				+ description + ", price=" + price + ", category=" + category + ", uploadby=" + uploadby + ", url="
				+ url + ", lessons=" + lessons + ", pay=" + pay + "]";
	}
}
