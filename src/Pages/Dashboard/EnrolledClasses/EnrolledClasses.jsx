import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const EnrolledClasses = () => {

    const {user,loading} =useContext(AuthContext)

    const [axiosSecure] = useAxiosSecure()

    const { data: enrolledClasses =[] } = useQuery({
        queryKey:['enrolledClasses', user?.email],
        enabled:!loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/enrolledClasses/${user?.email}`)
           return res.data;
        }
    })
    
    return (
        <div className="min-h-screen w-full px-10 pt-10">
          
                <h3 className="text-xl font-semibold">Total enrolled classes: {enrolledClasses.length}</h3>
              
        
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
                            <th>Status</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses?.map((singleEnrolledClass, index) => <tr key={singleEnrolledClass._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {singleEnrolledClass.class_name}

                                </td>
                                <td>
                                    <button className="btn btn-ghost bg-green-500 hover:bg-green-700 text-white btn-xs"
                                    >
                                        Paid
                                    </button>

                                </td>

                                
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default EnrolledClasses;