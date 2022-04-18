
import axios from 'axios';
import { Showalert } from './alert';


export const bookTour = async tourId => {

  try {
    //1)Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    )


    //2) Create checkout from + chart credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });

  } catch (err) {
    console.log(err);
    Showalert('error', err);
  } 

}   