// import React from 'react';
// import '../styles/PaymentSuccess.css';
// import { useLocation } from 'react-router-dom';
// function PaymentSuccess() {
//     const query=new URLSearchParams(useLocation().search);
//     const reference=query.get("reference")
//   return (
//    <div className='payment-success-container'>
//         <div className='payment-success-card'>
//             <h1 className='payment-success-title'>Payment Successful</h1>
//             <p className='payment-success-message'>Thankyou! Your transaction was successful!</p>
//             {
//                 reference && (
//                     <p className='payment-success-reference'>
//                         <strong>
//                             Reference ID:
//                         </strong>{reference}
//                     </p>
//                 )
//             }
//         </div>
//    </div>
//   )
// }

// export default PaymentSuccess

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/PaymentSuccess.css';

function PaymentSuccess() {
    const [searchParams] = useSearchParams();
    const reference = searchParams.get("reference");

    return (
        <div className="payment-success-container">
            <div className="payment-success-card">
                <h1 className="payment-success-title">Payment Successful</h1>
                <p className="payment-success-message">
                    Thank you! Your transaction was successful!
                </p>
                {reference && (
                    <p className="payment-success-reference">
                        <strong>Reference ID:</strong> {reference}
                    </p>
                )}
            </div>
        </div>
    );
}

export default PaymentSuccess;
