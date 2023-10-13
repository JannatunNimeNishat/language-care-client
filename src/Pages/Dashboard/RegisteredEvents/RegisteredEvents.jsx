import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const RegisteredEvents = () => {

    const { user, loading } = useContext(AuthContext)

    const [axiosSecure] = useAxiosSecure()

    const { data: allRegisteredEvents = [] } = useQuery({
        queryKey: ['allRegisteredEvents', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/registered_events/${user?.email}`)
            console.log(res.data);
            return res.data;
        }
    })

    return (
        <>
            <Helmet>
                <title>LanguageCare | Events</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="min-h-screen w-full px-10 pt-10">

                <h3 className="text-xl font-semibold">Total enrolled classes: {allRegisteredEvents.length}</h3>


                {/* table */}
                <div className="overflow-x-auto mt-3">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Event Title</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allRegisteredEvents?.map((singleEnrolledClass, index) => <tr key={singleEnrolledClass._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {singleEnrolledClass.eventTitle}

                                    </td>
                                    <td>
                                        <button className="btn btn-ghost bg-green-500 hover:bg-green-700 text-white btn-xs"
                                        >
                                            Registered
                                        </button>

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

export default RegisteredEvents;