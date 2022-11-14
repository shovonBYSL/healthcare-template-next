import { useEffect, useState } from "react";

// components
import HomeBanner from "../components/home/HomeBanner";
import Preloader from "../components/shared/Preloader";
import TestimonialSlider from "../components/shared/slider/TestimonialSlider";
import SummaryCard from "../components/shared/SummaryCard";
import BasicLayout from "../layouts/BasicLayout";
import FeaturedServices from "../components/home/FeaturedServices";
import ContactForm from "../components/shared/ContactForm";
import HomeAboutUs from "../components/home/HomeAboutUs";
import DoctorsConnection from "../components/home/DoctorsConnection";
import WorkingProcess from "../components/home/WorkingProcess";
import FeaturedBlogs from "../components/home/FeaturedBlogs";

// data
import { blogData } from "../data/blogData";
import { featuredServicesData, workingProcessData } from "../data/homeData";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (featuredServicesData && blogData) {
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  return (
    <BasicLayout>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <HomeBanner />
          <SummaryCard />
          <FeaturedServices data={featuredServicesData} />
          <HomeAboutUs />
          <DoctorsConnection />
          <WorkingProcess data={workingProcessData} />
          <TestimonialSlider />
          <FeaturedBlogs data={blogData.slice(0, 3)} />
          <ContactForm />
        </>
      )}
    </BasicLayout>
  );
};

export default Home;
