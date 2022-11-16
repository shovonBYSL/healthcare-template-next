import { useState } from "react";
import Image from "next/legacy/image";
import ImgsViewer from "react-images-viewer";

const PhotoGallery = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="bg-tertiary-10 py-6 md:py-10 xl:py-16"
    >
      <div className="container grid sm:grid-cols-3 gap-6">
        {data.slice(0, 3).map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setIsOpen(true);
              setCurrentImg(i);
            }}
            className="relative h-56 xl:h-64 2xl:h-96 w-full cursor-pointer"
          >
            <Image
              src={item.src}
              alt="galery images"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
        <ImgsViewer
          imgs={data}
          currImg={currentImg}
          isOpen={isOpen}
          showThumbnails={true}
          onClickThumbnail={(index) => setCurrentImg(index)}
          onClickPrev={() => setCurrentImg(currentImg - 1)}
          onClickNext={() => setCurrentImg(currentImg + 1)}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
