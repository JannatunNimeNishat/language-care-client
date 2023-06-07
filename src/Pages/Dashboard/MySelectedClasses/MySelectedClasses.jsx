import { FaTrash } from "react-icons/fa";
import useSelectedClass from "../../../hooks/useSelectedClass";


const MySelectedClasses = () => {
    const [selectedClass, refetch] = useSelectedClass()
    console.log(selectedClass);
    return (
        <div className="min-h-screen w-full px-10 pt-10">
            <div className="flex items-center justify-evenly">
                <h3 className="text-xl font-semibold">Total selected classes: {selectedClass.length}</h3>
                <p>Total cost: $10</p>
                <button className="btn btn-xs bg-blue-500 text-white">PAY</button>
            </div>

            {/* table */}
            <div className="overflow-x-auto mt-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>img</th>
                            <th>Name</th>
                            <th>instructor name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectedClass?.map((singleSelectedClass,index) => <tr key={singleSelectedClass._id}>
                                <th>
                                    {index+1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleSelectedClass.img} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    {singleSelectedClass.class_name}
                                
                                </td>
                                <td>
                                    {singleSelectedClass.instructor_name}
                                
                                </td>
                            
                                <td>${singleSelectedClass.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">
                                        <FaTrash className="h-5 w-5 text-red-500"/>
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

export default MySelectedClasses;