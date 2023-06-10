import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";


const InstructorClasses = () => {

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: instructor_classes = [] } = useQuery({
        queryKey: [' instructor_classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructor_classes/${user?.email}`)
            console.log(res.data);
            return res.data

        }

    })

    return (

        <>
            <Helmet>
                <title>LanguageCare | Instructor Classes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>




            <div className="min-h-screen w-full px-10 pt-10">

                <h3 className="text-xl font-semibold">Total classes: {instructor_classes?.length} </h3>



                {/* table */}
                <div className="overflow-x-auto mt-3">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Total Enrolled Students</th>
                                <th>Feedback</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                instructor_classes?.map((singleClass, index) => <tr key={singleClass._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {singleClass.class_name}
                                    </td>
                                    <td>
                                        ${singleClass.price}

                                    </td>
                                    <td>
                                        {singleClass.status}

                                    </td>
                                    <td>
                                        {singleClass.total_enrolled_students}

                                    </td>

                                    <td>{singleClass.feedback}</td>
                                    <th>
                                        <button className="btn btn-ghost bg-black text-white btn-xs">
                                            update
                                        </button>
                                    </th>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>

            </div>
        </>
    );
};

export default InstructorClasses;