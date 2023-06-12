import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SingleInstructorCard from "./SingleInstructorCard";
import { Helmet } from "react-helmet-async";
import Loading from "../Loading/Loading";


const AllInstructors = () => {
    const { data: instructors = [], isLoading: isInstructorLoading } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axios.get('https://language-care-server.vercel.app/instructors')
            return res.data;
        }
    })
    // console.log(instructors);
    if(isInstructorLoading){
        return <Loading></Loading>
    }
    return (
        <>
        <Helmet>
        <title>LanguageCare | Instructors</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <div className=" pt-28">
            {
                instructors?.map(instructor =><SingleInstructorCard key={instructor._id}
                instructor={instructor}
                ></SingleInstructorCard>)
            }
        </div>
        </>
    );
};

export default AllInstructors;