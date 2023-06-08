import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageAdminUsers = () => {

    const [axiosSecure] = useAxiosSecure()

    const { data: allUsers, refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-users')
            return res.data
        }
    })
    console.log(allUsers);

    const handleMakeInstructor = (_id) =>{
        console.log(_id);
        axiosSecure.patch(`/make-instructor/${_id}`)
        .then(res =>{
            console.log(res.data);
           if(res.data.matchedCount>0){
               refetch()
           }
        })
    }


    
    return (
        <div className="min-h-screen w-full px-10 pt-10">
            <h3 className="text-xl font-semibold">Total Users: {allUsers?.length}</h3>
            {/* table */}
            <div className="overflow-x-auto mt-3 ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>img</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUsers?.map((singleUser, index) => <tr key={singleUser._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleUser.img} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {singleUser.name}
                                </td>
                                <td>
                                    {singleUser.email}

                                </td>
                                <td>
                                    {singleUser.role}

                                </td>
                                
                                <td>
                                    <button onClick={()=>handleMakeInstructor(singleUser._id)}  className="btn btn-ghost bg-green-500 hover:bg-green-700 text-white btn-xs"
                                        disabled={singleUser.role === 'instructor' ? true : false}

                                    >
                                        Make instructor
                                    </button>

                                </td>
                                <td>
                                    <button  className="btn btn-ghost bg-red-500 hover:bg-red-700 text-white btn-xs"
                                        disabled={singleUser.role === 'admin' ? true : false}
                                    >
                                        Make admin
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

export default ManageAdminUsers;