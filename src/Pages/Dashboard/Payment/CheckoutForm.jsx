import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import './CheckoutForm.css'
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckOutForm = ({price}) => {
   

    const [cardError, setCardError] = useState('')

    const stripe = useStripe()
    const elements = useElements()

    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext)

    const [clientSecret, setClientSecret] = useState('')

    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    useEffect(()=>{
       if(price>0){
        axiosSecure.post('/create-payment-intent', {price})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
       }
    },[axiosSecure,price])




    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            setCardError(error.message)
        }
        else{
            console.log(paymentMethod);
            setCardError('')
        }
           setProcessing(true)
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous',
                },
              },
            },
          );
        if(confirmError){
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent);

    
        setProcessing(false)
        if(paymentIntent.status === 'success'){
            setTransactionId(paymentIntent.id)
        }

        //save payment information


    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button className="bg-blue-500 hover:bg-black font-semibold px-8 rounded-lg py-1 text-white " type="submit"  disabled={!stripe || clientSecret || processing}>
            {/* <button type="submit" disabled={!stripe}> */}
        Pay
      </button>
        </form>
    );
};

export default CheckOutForm;