/* import { useQuery } from "@tanstack/react-query";
import axios from "axios"; */
import SingleClassCard from "./SingleClassCard";
import useApprovedClass from "../../hooks/useApprovedClass";


const AllClasses = () => {


    /* const { data: approvedClasses = [], isLoading: isApprovedClassesLoading, refetch } = useQuery({
        queryKey: ['approvedClasses'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/approved-classes')
            return res.data;
        }
    }) */
    const [approvedClasses] = useApprovedClass()
    // console.log(approvedClasses);

    return (
        <div className="px-20 py-10">
            {/* search */}
            <div className="form-control  w-1/2 mx-auto">
                <div className="input-group ">
                    <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            {/* class card */}
            <div className="grid grid-cols-3 gap-5 mt-10">
                {
                    approvedClasses?.map(item => <SingleClassCard key={item._id}
                        item={item}
                    ></SingleClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;