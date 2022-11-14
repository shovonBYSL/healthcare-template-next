import Image from "next/legacy/image";

// components
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";

const BulletPointsGallery = ({ data, reversed, twoColulm }) => {
  const { header, title, subTitle, gallery, points } = data;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <div className="grid lg:grid-cols-2 items-center gap-6">
        <div className={`${reversed && "order-1 lg:order-2"}`}>
          <SectionHeader label={header} />
          <SectionTitle label={title} />
          <p className="text-tertiary-600 text-xs lg:text-sm xl:text-base mt-2 xl:mt-4 mb-4 xl:mb-7">
            {subTitle}
          </p>
          <div
            className={`grid gap-2 xl:gap-4 ${twoColulm && "sm:grid-cols-2"}`}
          >
            {points.map((item, i) => {
              return (
                <div key={i} className="flex gap-2 xl:gap-4">
                  <div className="relative h-4 xl:h-6 w-4 xl:w-6">
                    <Image
                      src="/images/icons/bullet.svg"
                      alt="icon"
                      layout="fill"
                    />
                  </div>
                  <p className="text-tertiary-600 text-xs lg:text-sm xl:text-base">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`grid md:grid-cols-2 md:grid-rows-2 gap-4 xl:gap-6 ${
            reversed && "order-2 lg:order-1"
          }`}
        >
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-[10px] overflow-hidden w-full object-cover ${
                i === 0
                  ? "row-span-2 h-[173px] md:h-full"
                  : "h-[173px] xl:h-[188px]"
              }`}
            >
              <Image src={item} layout="fill" objectFit="cover" alt="gallery" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulletPointsGallery;
