import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SingleInstructorCard from "./SingleInstructorCard";


const AllInstructors = () => {
    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/instructors')
            return res.data;
        }
    })
    // console.log(instructors);
    return (
        <div>
            {
                instructors?.map(instructor =><SingleInstructorCard key={instructor._id}
                instructor={instructor}
                ></SingleInstructorCard>)
            }
        </div>
    );
};

export default AllInstructors;