import Image from "next/legacy/image";
import Link from "next/link";

// components
import { BannerSubTitle, BannerTitle } from "../shared/SharedTextGroup";

const HomeBanner = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="4000"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="py-6 md:py-10 xl:py-16 relative"
    >
      <svg
        viewBox="0 0 419 187"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-10 absolute top-1 md:top-6 lg:top-4 xl:top-12 left-0 w-10 md:w-32 lg:w-52 xl:w-80 2xl:w-[416px]"
      >
        <path
          d="M417.5 184.54L365.5 150.54C255.5 84.5405 300.064 -39.5031 332.612 15.8518C373 84.5405 287.83 110.385 201 103.307C168.341 100.644 136.519 81.5572 107.5 84.5405C61.9298 89.2252 24.7031 124.382 2 139.645"
          stroke="#0084E8"
          strokeWidth="4"
        />
      </svg>

      <div className="container grid grid-cols-12 items-center gap-6">
        <div className="z-20 col-span-12 md:col-span-7">
          <p className="bg-primary-600 text-white text-xxs xxs:text-xs md:text-sm xl:text-base rounded-xl xl:rounded-[30px] px-2 xxs:px-3 xl:px-4 py-1 md:py-1.5 xl:py-2.5 mb-2 w-max">
            Solutions for Health Care
          </p>
          <BannerTitle label="Making Health Care" />
          <p className="text-primary-500 md:text-lg lg:text-xl xl:text-3xl 2xl:text-5xl ">
            Better Together
          </p>
          <BannerSubTitle label="We at Medicare are always fully focused on helping your to overcame any surgeon procedure with great commitment and easy recovery." />
          <div className="mt-3 md:mt-5 xl:mt-8 flex gap-3 xl:gap-6">
            <Link href="/appointment">
              <button className="btn-zoom-primary relative text-white hover:text-primary-600 bg-primary-600 hover:bg-transparent text-xxs xxs:text-xs lg:text-sm xl:text-base rounded xl:rounded-lg px-2 xxs:px-3 xl:px-4 py-1 md:py-1.5 xl:py-2.5 mb-2 transition-all duration-500">
                Appointment
              </button>
            </Link>
            <Link href="/doctors">
              <button className="relative overflow-hidden btn-slide-outline-primary border border-primary-600 text-primary-600 hover:text-white text-xxs xxs:text-xs lg:text-sm xl:text-base rounded xl:rounded-lg px-2 xxs:px-3 xl:px-4 py-1 md:py-1.5 xl:py-2.5 mb-2 transition-all duration-500">
                View Doctors
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="w-4/5 sm:w-3/5 md:w-full mx-auto">
            <Image
              src="/images/home/home_banner.png"
              alt="home banner"
              placeholder="blur"
              blurDataURL="/images/home/home_banner.png"
              height={596}
              width={500}
              objectFit="contain"
              className="animate-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
