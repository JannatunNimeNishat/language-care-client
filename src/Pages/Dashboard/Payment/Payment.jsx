import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GatWay_PK)

const Payment = () => {
    return (
       <div className="w-full px-40">
        <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
       </Elements>
       </div>
    );
};

export default Payment;