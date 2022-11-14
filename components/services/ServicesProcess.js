import Image from "next/legacy/image";

// components
import { SectionHeader } from "../shared/SharedTextGroup";

const ServicesProcess = ({ data }) => {
  const { header, title, subTitle, points, img } = data;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="bg-tertiary-10 py-6 md:py-10 xl:py-16"
    >
      <div className="container">
        <div className="grid md:grid-cols-12 items-center gap-6">
          <div className="md:col-span-7 xl:col-span-6">
            <SectionHeader label={header} light />
            <h2 className="text-tertiary-500 font-bold text-2xl lg:text-3xl xl:text-[40px] lg:leading-10 xl:leading-[60px]">
              {title.black}
              <span className="text-primary-600">{title.colored}</span>
            </h2>
            <p className="text-tertiary-500 text-xs lg:text-sm xl:text-base mt-2 xl:mt-4">
              {subTitle}
            </p>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {points.map(({ id, title, subTitle, icon }) => {
                return (
                  <div key={id}>
                    <div className="relative h-10 lg:h-16 xl:h-20 w-10 lg:w-16 xl:w-20">
                      <Image src={icon} alt="icon" layout="fill" />
                    </div>
                    <p className="text-tertiary-600 font-semibold lg:text-lg xl:text-xl mt-4 xl:mt-6 mb-2">
                      {title}
                    </p>
                    <p className="text-tertiary-500 text-xs lg:text-sm xl:text-base mt-2 xl:mt-4">
                      {subTitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-5 xl:col-span-6">
            <Image
              src={img}
              alt="service process"
              height={1128}
              width={1272}
              className="rounded-lg xl:rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesProcess;
