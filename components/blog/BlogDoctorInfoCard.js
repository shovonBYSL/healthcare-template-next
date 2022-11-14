import Image from "next/legacy/image";
import Link from "next/link";

const BlogDoctorInfoCard = ({ data }) => {
  const { img, name, speciality, about, socialLinks } = data;

  return (
    <div className="py-6 flex flex-col md:flex-row md:items-center gap-4 border-b">
      <div className="relative h-32 xl:h-[180px] w-32 xl:w-[195px] shrink-0">
        <Image src={img} alt="doctor" layout="fill" />
      </div>
      <div className="xl:p-4">
        <p className="font-lato font-semibold italic xl:text-xl">{name}</p>
        <p className="font-lato font-semibold italic text-tertiary-100 text-sm xl:text-base">
          {speciality}
        </p>
        <p className="text-tertiary-500 text-xs xl:text-sm font-lato font-semibold italic mt-2 mb-4">
          {about}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-tertiary-500 text-sm font-medium">Follow</p>
          <div className="flex gap-2 xl:gap-3">
            {socialLinks.map((item, i) => (
              <Link
                rel="noreferrer"
                target="_blank"
                key={i}
                href={item.path}
                className="relative h-5 xl:h-6 w-5 xl:w-6 hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={`/images/social/${item.name}Gray.svg`}
                  alt="social icon"
                  layout="fill"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDoctorInfoCard;
