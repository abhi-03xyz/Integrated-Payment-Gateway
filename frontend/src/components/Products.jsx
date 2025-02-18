import React from 'react';
import axios from 'axios';
import '../styles/Products.css';

function Products({products}) {
  //  console.log(products)
  const checkOutHandler=async(amount)=>{
    //console.log(amount);
    const {data:keyData}=await axios.get("api/v1/getkey");
    const {key}=keyData;
    //console.log(key);

    const {data:orderData}=await axios.post("/api/v1/payment/process",{amount});
   const {order}=orderData;
   //console.log(order);
   const options = {
    key, // Replace with your Razorpay key_id
    amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: 'INR',
    name: 'Shopers Stop',
    description: 'Test Transaction',
    order_id: order.id, // This is the order_id created in the backend
    callback_url: '/api/v1/paymentVerification', // Your success URL
    prefill: {
      name: 'Abhishek Pattanaik',
      email: 'AP@example.com',
      contact: '9999999999'
    },
    theme: {
      color: '#F37254'
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();


  }
  return (
   <div className="products-container">
    {
        products.map((item)=>(
            <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className='product-image'/>
            <h3 className="product-title">Product Title</h3>
            <p className="product-price">Price<strong> {item.price}</strong></p>
            <button className="pay-button" onClick={()=>checkOutHandler(item.price)}>Pay ({item.price})</button>
        </div>
        ))
    }


  
   </div>
  )
}

export default Products

