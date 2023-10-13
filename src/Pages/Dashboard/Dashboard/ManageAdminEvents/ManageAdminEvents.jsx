import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageAdminEvents = () => {

    const [axiosSecure] = useAxiosSecure()

    const { data: allEvents, refetch } = useQuery({
        queryKey: ['allEvents'],
        queryFn: async () => {
            const res = await axiosSecure.get('/upcoming_events')
            return res.data
        }
    })


    const handleEditEvent = (_id) =>{
        /* console.log(_id);
        axiosSecure.patch(`/make-instructor/${_id}`)
        .then(res =>{
            console.log(res.data);
           if(res.data.matchedCount>0){
               refetch()
           }
        }) */
    }

    const handleDeleteEvent = (_id)=>{
        console.log(_id);
        axiosSecure.delete(`/delete_event/${_id}`)
        .then(res =>{
            console.log(res.data);
           if(res.data.deletedCount>0){
               refetch()
           }
        })
    }

    return (
        <>
        <Helmet>
               <title>LanguageCare | Manage Events</title>
               <link rel="canonical" href="https://www.tacobell.com/" />
           </Helmet>
       
       <div className="min-h-screen w-full px-10 pt-10">
           <h3 className="text-xl font-semibold">Total Events: {allEvents?.length}</h3>
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
                           <th>title</th>
                           {/* <th>Speaker</th> */}
                           <th></th>
                           <th></th>

                       </tr>
                   </thead>
                   <tbody>

                       {
                           allEvents?.map((singleUser, index) => <tr key={singleUser._id}>
                               <th>
                                   {index + 1}
                               </th>
                               <td>
                                   <div className="flex items-center space-x-3">
                                       <div className="avatar">
                                           <div className="mask mask-squircle w-12 h-12">
                                               <img src={singleUser?.eventImg} />
                                           </div>
                                       </div>

                                   </div>
                               </td>
                               <td>
                                   {singleUser.eventTitle}
                               </td>
                               
                               
                               <td>
                                   <button onClick={()=>handleEditEvent(singleUser._id)}  className="btn btn-ghost bg-green-500 hover:bg-green-700 text-white btn-xs">
                                       {/* disabled={singleUser.role === 'instructor' ? true : false} */}
                                       Edit
                                   </button>

                               </td>
                               <td>
                                   <button onClick={()=> handleDeleteEvent(singleUser._id)}  className="btn btn-ghost bg-red-500 hover:bg-red-700 text-white btn-xs"
                                   >
                                       {/* disabled={singleUser.role === 'admin' ? true : false} */}
                                       Delete
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

export default ManageAdminEvents;