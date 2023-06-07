import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LgButton from "../../../components/Buttons/LgButton";
import SingleClass from "../../SingleClass/SingleClass";


const PopularClasses = () => {

    const { data: classes = [], isLoading: isClassesLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/popular-classes')
            return res.data;
        }
    })

   

    return (
        <div className="mt-20 min-h-[100vh] bg-[#fff6f4] ">
            <div className=" px-28 py-28">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="uppercase text-blue-500 font-bold">OUR CLASSES</p>
                        <h3 className="text-4xl font-bold mt-3">Popular Classes</h3>
                    </div>
                    <LgButton btn_text='Browse all classes'></LgButton>

                </div>
                {/* card sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14">
                    {
                        classes?.map(item => <SingleClass
                            key={item._id} item={item}
                        ></SingleClass>)
                    }
                </div>
            </div>


        </div>
    );
};

export default PopularClasses;