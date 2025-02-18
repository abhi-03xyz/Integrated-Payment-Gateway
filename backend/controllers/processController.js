import {instance} from "../server.js";
import crypto from 'crypto';
export const processPayment=async (req,res)=>{
  const options={
    amount:Number(req.body.amount*100),
    currency:"INR"
  }
  const order=await instance.orders.create(options)

    res.status(200).json({
        sucess:true,
        order
    })
}
export const getKey=async(req,res)=>{
    res.status(200).json({
        key:process.env.RAZORPAY_API_KEY
    })
}
export const paymentVerification=async(req,res)=>{
  const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
  //console.log(req.body);
  const body=razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSinature=crypto.createHmac("sha256",process.env.RAZORPAY_API_SECRET).update(body.toString()).digest("hex");
  //algo
  //console.log(`Razorpay Signature,${razorpay_signature}`);
  //console.log(`Expected Signature,${expectedSinature}`);
  const isAuthenticate=expectedSinature===razorpay_signature;
  if(isAuthenticate){
   
    return res.redirect(`http://localhost:5173/paymentSuccess?reference=${razorpay_payment_id}`);

  }else{
    res.status(400).json({
      sucess:false
    })
  }
 
}