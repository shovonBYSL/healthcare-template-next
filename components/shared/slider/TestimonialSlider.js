import Image from "next/legacy/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// components
import { SectionHeader, SectionTitle } from "../SharedTextGroup";

// data
import { testimonialData } from "../../../data/testimonialData";

const TestimonialSlider = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 lg:py-10 xl:py-16"
    >
      <SectionHeader label="Testimonials" center light />
      <SectionTitle label="What our patient say”" center />
      <p className="text-xs lg:text-sm xl:text-base text-center">
        Best medical & health services provider
      </p>
      <div className="my-6 flex justify-center">
        <Image
          src="/images/testimonial/testimonial_map.png"
          alt="testimonial map"
          height={269}
          width={568}
        />
      </div>
      <div className="grid grid-cols-12 md:gap-6 items-center testimonial-slider">
        <div className="p-2 cursor-pointer group">
          <BsChevronLeft className="slidePrev-btn text-tertiary-100 group-hover:text-primary-600 mb-10" />
        </div>
        <div className="col-span-10">
          <Swiper
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            speed={1500}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{ prevEl: ".slidePrev-btn", nextEl: ".slideNext-btn" }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            {testimonialData.map(({ id, name, address, comment, img }) => {
              return (
                <SwiperSlide key={id} className="px-4">
                  <div className="grid grid-cols-10 space-y-2 mb-10">
                    <div className="col-span-12 lg:col-span-3 xl:col-span-2 flex items-center gap-4">
                      <Image
                        src="/images/testimonial/user.png"
                        alt="testimonial"
                        height={36}
                        width={36}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-xxxs xxs:text-xxs lg:text-base xl:text-xl font-lato italic text-primary-700 font-bold">
                          {name}
                        </p>
                        <p className="text-xxxs xxs:text-xxs xl:text-xs font-lato italic text-tertiary-500">
                          {address}
                        </p>
                      </div>
                    </div>
                    <p className="col-span-12 lg:col-span-7 xl:col-span-8 text-xxs md:text-xs lg:text-sm xl:text-base font-medium italic text-tertiary-600">
                      “{comment}”
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="p-2 cursor-pointer group">
          <BsChevronRight className="slideNext-btn text-tertiary-100 group-hover:text-primary-600 md:ml-auto mb-10" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
