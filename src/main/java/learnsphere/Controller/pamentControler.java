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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import learnsphere.Entity.Courses;
import learnsphere.Entity.Users;
import learnsphere.Repositories.UserRepository;
import learnsphere.Services.CourseServices;
import learnsphere.Services.UserServices;

import org.aspectj.weaver.ast.Instanceof;
import org.json.JSONObject;
import com.razorpay.*;

@CrossOrigin("*")
@RequestMapping
@RestController
public class pamentControler {
	@Autowired
	UserServices us;
	@Autowired
	UserController uc;
	@Autowired
	UserRepository ur;
	@Autowired
	CourseServices cs;
//this empty for know latter it is updated
	Courses course;
	@PostMapping("/createOrder")
	public String dopay(@RequestBody Courses c) {
		course=cs.viewCoursesByName(c.getName());
		Order order=null;
		Users u=us.getUser(uc.user());
		for(Courses ucs:u.getPurchasedCourses()) {
			if(course.equals(ucs)||ucs.getCourseid()==course.getCourseid()) {
				return "yes".toString();
			}
		}
		try {
		RazorpayClient razorpay = new RazorpayClient("rzp_test_pp9YPJEHeouiL9", "9McTy8XzpLyjcGtuDcaIf685");
		JSONObject orderRequest = new JSONObject();
		orderRequest.put("amount",Integer.parseInt(course.getPrice())*100);
		orderRequest.put("currency","INR");
		orderRequest.put("receipt", "Learn Sphere - "+course.getUploadby());
		JSONObject notes = new JSONObject();
		notes.put("notes_key_1",course.getName());
		orderRequest.put("notes",notes);
		order=razorpay.orders.create(orderRequest);
		return order.toString();
		}catch (Exception e) {
			System.out.println(e);
			System.err.println("payement failed");
			return "payement failed";
		}
	}
	
	@PostMapping("/verify")
	@ResponseBody
	public boolean verifyPayment(@RequestBody data d) {
	    try {
	    	System.out.println("started");
	        // Initialize Razorpay client with your API key and secret
	        RazorpayClient razorpayClient = new RazorpayClient("rzp_test_pp9YPJEHeouiL9", "9McTy8XzpLyjcGtuDcaIf685");
	        // Create a signature verification data string
//	        String verificationData = d.orderId + "|" + d.paymentId;
//
//	        // Use Razorpay's utility function to verify the signature
//	        boolean isValidSignature = Utils.verifySignature(verificationData, d.signature, "9McTy8XzpLyjcGtuDcaIf685");
	        JSONObject options = new JSONObject();
	        options.put("razorpay_order_id", d.getOrderId()+"");
	        options.put("razorpay_payment_id", d.getPaymentId()+"");
	        options.put("razorpay_signature",d.getSignature()+"");
	        boolean isValidSignature =Utils.verifyPaymentSignature(options,"9McTy8XzpLyjcGtuDcaIf685");
	        if(!isValidSignature) {
	        	payment();
	        }
	        System.out.println(isValidSignature);
	        return !isValidSignature;
	    } catch (RazorpayException e) {
	        e.printStackTrace();
	        System.out.println("not paid");
	        return false;
	    }
	}
	public String payment() {
		Users u=us.getUser(uc.user());
		List<Courses> allc=u.getPurchasedCourses();
		allc.add(course);
		u.setPurchasedCourses(null);
		u.setPurchasedCourses(allc);
		ur.save(u);
		return "added";
	}
	@GetMapping("failure")
	public String Notpaid() {
		return "login";
	}
}

class data{
	private String orderId;
	private String signature;
	private String paymentId;
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getSignature() {
		return signature;
	}
	public void setSignature(String signature) {
		this.signature = signature;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
}