
import Lottie from "lottie-react";
import loadingAnimation from '../../assets/loading/loading.json'
const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
             <Lottie className="h-96 w-96" animationData={loadingAnimation} loop={true} />
           
        </div>
    );
};

export default Loading;