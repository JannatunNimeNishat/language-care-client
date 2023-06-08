import useGetAllClasses from "../../../hooks/useGetAllClasses";


const ManageAdminClasses = () => {
    const [allClasses] = useGetAllClasses()
    console.log(allClasses);
    return (
        <div className="min-h-screen w-full px-10 pt-10">
        
            <h3 className="text-xl font-semibold">Total classes:  {allClasses?.length}</h3>
           
      

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
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        allClasses?.map((singleClass, index) => <tr key={singleClass._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleClass.img} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                            <td>
                            {singleClass.class_name}
                            </td>
                            <td>
                                {singleClass.instructor_name}

                            </td>
                            <td>
                                {singleClass.instructor_email}

                            </td>
                            <td>
                                {singleClass.available_seats}

                            </td>
                            <td>
                                ${singleClass.price}

                            </td>
                            <td>
                                {singleClass.status}

                            </td>
                            <td>
                            <button  className="btn btn-ghost bg-green-500 hover:bg-green-700 text-white btn-xs">
                                   Approved
                                </button>

                            </td>
                            <td>
                            <button  className="btn btn-ghost bg-red-500 hover:bg-red-700 text-white btn-xs">
                                   Deny
                                </button>

                            </td>
                           
                            <th>
                                <button  className="btn btn-ghost bg-black text-white btn-xs">
                                   Feedback
                                </button>
                            </th>
                        </tr>)
                    }


                </tbody>

            </table>
        </div>

    </div>
    );
};

export default ManageAdminClasses;