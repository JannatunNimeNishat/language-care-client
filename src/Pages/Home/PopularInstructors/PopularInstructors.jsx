import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SingleInstructor from "../../SingleInstructor/SingleInstructor";


const PopularInstructors = () => {

    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/instructors')
            return res.data;
        }
    })
  
    return (
        <div className="min-h-[80vh] mt-16">
            <div className=" px-28 py-28">
                <div className="text-center">
                    <p className="uppercase text-blue-500 font-bold">OUR POPULAR</p>
                    <h3 className="text-4xl font-bold mt-3">Instructors</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14">
                    {
                        instructors?.slice(0, 6).map(instructor => <SingleInstructor
                            key={instructor._id}
                            instructor={instructor}

                        ></SingleInstructor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;