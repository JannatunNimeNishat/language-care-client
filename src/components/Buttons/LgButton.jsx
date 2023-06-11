
import { FaArrowRight } from "react-icons/fa";
const LgButton = ({btn_text}) => {
    return (
    
           <button className=" px-3 py-2 lg:px-5 lg:py-4 rounded-lg text-xl text-white font-bold bg-blue-500 hover:bg-black flex justify-between items-center">
            {btn_text}
           <FaArrowRight className=" ml-2 lg:ml-4 h-5 w-5 "/>
           
           </button> 
      
    );
};

export default LgButton;