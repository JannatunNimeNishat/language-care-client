import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import dateFormat from 'dateformat';
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: paymentHistoryData = [] } = useQuery({
        queryKey: ['paymentHistoryData', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymentHistory/${user?.email}`)
            return res.data
        }
    })
    // console.log(paymentHistoryData);

    const total = paymentHistoryData.reduce((sum, item) => sum + item.price, 0)
    console.log(total);
    return (
        <>
            <Helmet>
                <title>LanguageCare | Payment History</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="min-h-screen w-full px-10 pt-10">

                <div className="flex items-center justify-between px-10">
                    <h3 className="text-xl font-semibold">Total Payment made: {paymentHistoryData.length}</h3>
                    <p className="text-xl font-semibold">Total cost: ${total}</p>

                </div>


                {/* table */}
                <div className="overflow-x-auto mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>transactionId</th>
                                <th>Paid</th>
                                <th>date</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistoryData?.map((singlePaymentHistoryData, index) => <tr key={singlePaymentHistoryData._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {singlePaymentHistoryData.transactionId}

                                    </td>
                                    <td className="text-red-500">
                                        -${singlePaymentHistoryData.price}

                                    </td>
                                    <td>
                                        {dateFormat(singlePaymentHistoryData.date, "mmmm dS, yyyy, h:MM:ss TT")}

                                    </td>



                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>

            </div>
        </>
    );
};

export default PaymentHistory;