import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// data
import { serviceImages } from "../../../data/serviceSliderData";

const ServiceSlider = () => {
  return (
    <div className="bg-tertiary-10 py-6 xl:py-10 serviceSlider">
      <div className="container">
        <Swiper
          slidesPerView="auto"
          breakpoints={{
            1024: {
              width: 1024,
              slidesPerView: 6,
            },
            768: {
              width: 768,
              slidesPerView: 6,
            },
            425: {
              width: 425,
              slidesPerView: 5,
            },
            320: {
              width: 320,
              slidesPerView: 4,
            },
          }}
          centeredSlides={true}
          loop={true}
          speed={5000}
          freeMode={true}
          autoplay={{
            delay: -1000,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          loopFillGroupWithBlank={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {serviceImages.map((img, i) => {
            return (
              <SwiperSlide key={i} className="px-4">
                <div className="relative h-6 md:h-8 xl:h-14 w-16 md:w-20 xl:w-40">
                  <Image
                    src={img}
                    alt="service images"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceSlider;
