import { useEffect, useState } from "react";

// components
import Preloader from "../components/shared/Preloader";
import BasicLayout from "../layouts/BasicLayout";
import Locations from "../components/contact/Locations";
import PhotoGallery from "../components/contact/PhotoGallery";
import AboutHospital from "../components/contact/AboutHospital";
import GetInTouch from "../components/contact/GetInTouch";

// data
import {
  aboutHospitalData,
  contactGalleryPhotos,
  contactInfo,
  locationData,
} from "../data/contactData";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      locationData &&
      contactGalleryPhotos &&
      aboutHospitalData &&
      contactInfo
    ) {
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  return (
    <BasicLayout head="Contact">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Locations data={locationData} />
          <GetInTouch data={contactInfo} />
          <PhotoGallery data={contactGalleryPhotos} />
          <AboutHospital data={aboutHospitalData} />
        </>
      )}
    </BasicLayout>
  );
};

export default Contact;
