import React from 'react';
import Products from './components/products';
import PaymentSuccess from './components/PaymentSuccess';
import productsData from './components/data';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
   <Router>
       <Routes>
           <Route path="/" element={<Products products={productsData}/>}/>
           <Route path="/paymentSuccess" element={<PaymentSuccess/>}/>

           
       </Routes>
   </Router>
  )
}

export default App