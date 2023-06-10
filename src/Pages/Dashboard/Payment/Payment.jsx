import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GatWay_PK)

const Payment = () => {
    const [selectedClass] = useSelectedClass()
    const total = selectedClass.reduce((sum,item)=> sum + item.price,0)
    const price = parseFloat(total.toFixed(2))
    //console.log(price);
    return (
       <>
       <Helmet>
        <title>LanguageCare | Payment</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
       <div className="w-full px-40">
        <Elements stripe={stripePromise}>
            <CheckOutForm selectedClass={selectedClass} price ={price}></CheckOutForm>
       </Elements>
       </div>
       </>
    );
};

export default Payment;