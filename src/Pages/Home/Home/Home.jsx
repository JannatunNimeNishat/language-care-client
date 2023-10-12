import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Testimonial from "../Testimonial/Testimonial";
import Reveal from "../../../components/Reveal/Reveal";
import AboutUs from "../AboutUs/AboutUs";
import BlogAndNews from "../BlogAndNews/BlogAndNews";
import UpComingEvents from "../UpComingEvents/UpComingEvents";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>LanguageCare | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <Reveal>

          <Banner></Banner>
        </Reveal>

        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <Features></Features>
        <Testimonial></Testimonial>
        <UpComingEvents />
        <AboutUs></AboutUs>
        <NewsLetter></NewsLetter>
        <BlogAndNews></BlogAndNews>
      </div>
    </>
  );
};

export default Home;