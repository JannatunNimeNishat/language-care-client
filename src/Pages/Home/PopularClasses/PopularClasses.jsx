import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LgButton from "../../../components/Buttons/LgButton";
import SingleClass from "../../SingleClass/SingleClass";
import Loading from "../../Loading/Loading";


const PopularClasses = () => {

    const { data: classes = [], isLoading: isClassesLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/popular-classes')
            return res.data;
        }
    })

   if(isClassesLoading){
    return <Loading></Loading>
   }

    return (
        <div className="mt-20 min-h-[100vh] bg-[#fff6f4] ">
            <div className=" px-10  py-10 lg:px-28 lg:py-28">
                <div className="lg:flex justify-between items-center">
                    <div className="space-y-3 lg:space-y-0 mb-5 lg:mb-0">
                        <p className="uppercase text-blue-500 font-bold">OUR CLASSES</p>
                        <h3 className="text-4xl font-bold  lg:mt-3">Popular Classes</h3>
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