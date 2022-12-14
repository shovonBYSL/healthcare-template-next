import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { VscPlay } from "react-icons/vsc";

// components
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";
import VideoModal from "../shared/VideoModal";

const WorkingProcess = ({ data }) => {
  const { header, title, subTitle, img, points } = data;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      {isOpen && <VideoModal setIsOpen={setIsOpen} video="/videos/dummy.mp4" />}
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
        <div className="relative cursor-pointer group">
          <div className="relative w-full">
            <Image
              src={img}
              alt="working process section"
              height={1043}
              width={1200}
            />
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="absolute top-[55%] left-[65%] -translate-x-[65%] -translate-y-[55%]"
          >
            <div className="bg-[#E6F0FF] h-9 lg:h-14 xl:h-20 w-9 lg:w-14 xl:w-20 relative rounded-full flex justify-center items-center">
              <VscPlay className="text-[#0047B3] lg:text-2xl xl:text-4xl z-10 ml-1 xl:ml-1.5" />
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6F0FF] opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
