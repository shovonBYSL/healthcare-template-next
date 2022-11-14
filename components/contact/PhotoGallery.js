import Image from "next/legacy/image";

const PhotoGallery = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="bg-tertiary-10 py-6 md:py-10 xl:py-16"
    >
      <div className="container grid sm:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="relative h-56 xl:h-64 2xl:h-96 w-full">
            <Image
              src={item}
              alt="galery images"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
