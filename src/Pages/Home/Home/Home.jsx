import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Features></Features>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;