import Image from "next/legacy/image";

// components
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";

const WorkingProcess = ({ data }) => {
  const { header, title, subTitle, img, points } = data;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <div className="grid md:grid-cols-2 items-center gap-6">
        <div className="lg:w-4/5">
          <SectionHeader label={header} />
          <SectionTitle label={title} />
          <p className="text-tertiary-500 text-xs lg:text-sm xl:text-base mb-4 xl:mb-10">
            {subTitle}
          </p>
          <div className="ml-2 xl:ml-6 space-y-4 xl:space-y-10">
            {points.map(({ id, title, subTitle, icon }) => {
              return (
                <div key={id} className="flex gap-2 xl:gap-4">
                  <div className="relative h-7 md:h-10 xl:h-16 w-7 md:w-10 xl:w-20">
                    <Image src={icon} alt="icon" layout="fill" />
                  </div>
                  <div className="w-full">
                    <p className="text-tertiary-500 font-semibold text-xs xl:text-xl mb-2">
                      {title}
                    </p>
                    <p className="text-tertiary-400 font-medium text-xxs xl:text-sm">
                      {subTitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Image
          src={img}
          alt="working process section"
          height={1043}
          width={1200}
        />
      </div>
    </div>
  );
};

export default WorkingProcess;
