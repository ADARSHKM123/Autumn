
import axios from 'axios';
import {Showalert} from './alert';

// const stripe = Stripe('pk_test_51Kfh4lSFIr8mLSlWRAzRvsKnrjl8gq1NclHQbCj3TFj946sNPVfcGk2w5M8xFEMtQZ7twTKvyPcdEzHFuVdr1IKi00UQQqzI1q')

export const bookTour =async tourId =>{

    try{
         //1)Get checkout session from API
    const session = await axios (
        `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}` 
    ) 
   console.log(session);
    

    //2) Create checkout from + chart credit card
    await stripe.redirectToCheckout({
        sessionId: session.data.session.id
      });
      
    }catch (err) {
        console.log(err);
        showAlert('error', err);
      }
   
}   