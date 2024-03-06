import axios from "axios";
const payment=async(c)=>{
    try{
        const response=await axios.post("http://localhost:8080/createOrder",{
                name:c.name,
        })
       
        console.log(response);
        if(response.data==="yes"){
            alert("You already purchased this course. so please go to my course")
        }else{
            const u=await axios.get("http://localhost:8080/loginuser")
            Payment(c,u,response.data.id)
        }
       
    }catch(e){
        alert(e)
        window.location.href="/entry"
    }
}

export default payment;

function Payment(c,u,order) {    
    var options = {
            key: "rzp_test_pp9YPJEHeouiL9",
            key_secret:"9McTy8XzpLyjcGtuDcaIf685", // Enter the Key ID generated from the Dashboard
            amount: c.price*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Learn Sphere for Course :"+ c.name,
            description:"Course Name : "+ c.name+" & by : "+c.uploadby,
            image:"https://img.freepik.com/free-photo/beautiful-mountain-landscape_23-2149063332.jpg",
            order_id:order , //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response){
                const paymentId=(response.razorpay_payment_id);
                const orderId=(response.razorpay_order_id);
                const signature=(response.razorpay_signature);
                const data = {
                    orderId:orderId,
                    paymentId:paymentId,
                    signature:signature,
                  };
                const f= await axios.post("http://localhost:8080/verify",{data})
                console.log(f);
                console.log(orderId+" "+paymentId+" "+signature);
                console.log(f);
                if(f===true){
                    window.location.href="course"
                }else{
                    window.location.href="/entry"
                }     
            },
            prefill: {
                name: u.data.username,
                email: u.data.email,
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
        document.getElementById('rzp-button1').onclick = function(e){
            rzp1.open();
            e.preventDefault();
        } 
}
