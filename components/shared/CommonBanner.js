import Image from "next/legacy/image";

// components
import {
  BannerSubTitle,
  BannerTitle,
  BannerTitleHeader,
} from "./SharedTextGroup";

const CommonBanner = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="bg-tertiary-10 py-6 lg:py-10 xl:py-20 2xl:h-[510px] flex justify-center items-center"
    >
      <div className="container grid grid-cols-12 items-center gap-6">
        <div className="col-span-12 md:col-span-7">
          {data.titleHeader && <BannerTitleHeader label={data.titleHeader} />}
          <BannerTitle label={data.title} />
          {data.subTitle && <BannerSubTitle label={data.subTitle} />}
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="">
            <Image
              src={data.img}
              alt="banner"
              className="object-contain animate-img"
              height={600}
              width={1000}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
