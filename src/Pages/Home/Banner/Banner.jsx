import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img3rd from '../../../assets/banner/3rd.jpg' 
import img1st from '../../../assets/banner/1st.jpg' 
import img4th from '../../../assets/banner/4th.jpg' 

import './Banner.css'

const Banner = () => {
    return (
        <div className="">
            <Carousel autoPlay='true' showArrows='true' >
                <div>
                    <img className="lg:h-[550px] lg:w-[200px]" src={img3rd}/>
                  
                </div>
                <div>
                    <img className="lg:h-[550px]  lg:w-[200px]" src={img1st} />
                   
                </div>
                <div>
                    <img className="lg:h-[550px]  lg:w-[200px]" src={img4th} />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;