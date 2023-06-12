import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SingleInstructor from "../../SingleInstructor/SingleInstructor";
import Loading from "../../Loading/Loading";
import Reveal from "../../../components/Reveal/Reveal";


const PopularInstructors = () => {

    const { data: instructors = [], isLoading: isInstructorLoading } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axios.get('https://language-care-server.vercel.app/instructors')
            return res.data;
        }
    })
    if (isInstructorLoading) {
        return <Loading></Loading>
    }
    return (
        <>

            <div className="min-h-[80vh]  bg-blue-500 pb-16">

                <div className=" px-10 py-10 lg:px-28 lg:py-24">
                    <Reveal>
                        <div className="text-center">
                            <p className="uppercase text-white font-bold">OUR POPULAR</p>
                            <h3 className="text-4xl text-white font-bold mt-3">Instructors</h3>
                        </div>
                    </Reveal>
                    {/* <Reveal> */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14 px-10">
                            {
                                instructors?.slice(0, 6).map(instructor => <SingleInstructor
                                    key={instructor._id}
                                    instructor={instructor}

                                ></SingleInstructor>)
                            }
                        </div>
                    {/* </Reveal> */}
                </div>
            </div>
        </>
    );
};

export default PopularInstructors;