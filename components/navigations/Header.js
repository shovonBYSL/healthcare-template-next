import Image from "next/legacy/image";
import Link from "next/link";

// data
import {
  headerAddress,
  headerSocialLinks,
} from "../../data/navigations/headerData";

const Header = () => {
  const Icon = ({ icon, alt }) => {
    return (
      <div className="relative h-4 w-4 lg:h-6 lg:w-6">
        <Image src={icon} alt={alt} layout="fill" />
      </div>
    );
  };

  return (
    <div className="z-50 py-4 lg:py-5 bg-primary-600 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-col md:flex-row items-center gap-1 lg:gap-7">
            {headerAddress.map(({ id, alt, title, icon }) => {
              return (
                <div key={id} className="flex items-center gap-2">
                  <Icon icon={icon} alt={alt} />
                  <p className="text-xxs lg:text-sm font-medium">{title}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            {headerSocialLinks.map(({ id, alt, icon, path }) => (
              <Link key={id} rel="noreferrer" target="_blank" href={path}>
                <Icon icon={icon} alt={alt} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
