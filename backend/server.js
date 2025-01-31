import app from './app.js';
import dotenv from 'dotenv';
dotenv.config({path:"./config/config.env"});
import Razorpay from 'razorpay';
export const instance=new Razorpay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET
})

//app.post("/payment/process",processPayment)

const port=process.env.PORT|| 3000;
app.listen(port,()=>{
    
    console.log(`Server is running on ${port}`);
})