import Image from "next/legacy/image";
import Link from "next/link";

// data
import { footerData } from "../../data/navigations/footerData";
import { headerSocialLinks } from "../../data/navigations/headerData";

// utility function
import { currentYear } from "../../utils/commonFunctions";

const Footer = () => {
  return (
    <div className="text-white bg-primary-700">
      <div className="container">
        <div className="w-max mx-auto py-6">
          <Link href="/">
            <Image
              src="/images/logo/logoLight.svg"
              alt="logo"
              height={49}
              width={170}
            />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-around text-center">
          {footerData.contact.map(({ id, title, info }) => {
            return (
              <div
                key={id}
                className={`w-full ${
                  id === 1 ? "md:border-t md:border-b" : "border-t border-b"
                }`}
              >
                <div
                  className={`py-6 md:py-2 lg:py-5 md:my-5 ${
                    id === 1 && "md:border-l md:border-r"
                  }`}
                >
                  <p className="font-semibold lg:text-lg xl:text-2xl mb-2">
                    {title}
                  </p>
                  {info.map((item, i) => (
                    <p key={i} className="text-xs lg:text-sm xl:text-base">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7 xl:col-span-8 flex flex-col md:flex-row justify-around lg:justify-evenly gap-6">
            {footerData.info.map(({ id, title, items }) => (
              <div key={id}>
                <p className="font-semibold lg:text-lg xl:text-2xl mb-2 text-center md:text-start">
                  {title}
                </p>
                <div className="space-y-2">
                  {items.map(({ id, label, path }) => (
                    <div
                      key={id}
                      className="text-center md:text-start text-xs lg:text-sm xl:text-base"
                    >
                      {path ? (
                        <div>
                          <Link href={path}>{label}</Link>
                        </div>
                      ) : (
                        <p>{label}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-5 xl:col-span-4 w-max mx-auto md:mx-0 space-y-2 text-center md:text-start">
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email adderss"
                className="bg-transparent border rounded px-3 md:px-4 py-2 placeholder-white text-xs lg:text-sm xl:text-base outline-0 focus:shadow-xl"
              />
              <button className="px-3 lg:px-7 py-2 bg-primary-500 hover:bg-primary-600 hover:shadow-xl rounded border text-xs lg:text-sm xl:text-base transition-all duration-300">
                Send
              </button>
            </div>
            <p className="text-xs lg:text-sm">Subcribe to get updates</p>
            <p className="font-semibold pt-4">Follow Us</p>
            <div className="flex items-center gap-2 w-max mx-auto md:mx-0">
              {headerSocialLinks.map(({ id, alt, icon, path }) => (
                <Link key={id} rel="noreferrer" target="_blank" href={path}>
                  <Image key={id} src={icon} alt={alt} height={24} width={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="py-3 text-center text-xs lg:text-sm xl:text-base bg-primary-600">
        copyright &copy;{currentYear} reserved by&nbsp;
        <span className="xl:font-semibold">medical healthcare center</span>
      </p>
    </div>
  );
};

export default Footer;
