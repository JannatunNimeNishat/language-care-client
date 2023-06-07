
import { FaArrowRight } from "react-icons/fa";
const LgButton = ({btn_text}) => {
    return (
    
           <button className="px-5 py-4 rounded-lg text-xl text-white font-bold bg-blue-500 hover:bg-black flex justify-between items-center">
            {btn_text}
           <FaArrowRight className=" ml-4 h-5 w-5"/>
           
           </button> 
      
    );
};

export default LgButton;