import { CardElement } from "@stripe/react-stripe-js";

import './CheckoutForm.css'

const CheckOutForm = () => {
    return (
        <form>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="bg-blue-500 hover:bg-black font-semibold px-8 rounded-lg py-1 text-white " type="submit" >
            {/* <button type="submit" disabled={!stripe}> */}
        Pay
      </button>
        </form>
    );
};

export default CheckOutForm;