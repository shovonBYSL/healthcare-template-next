import Link from "next/link";

// components
import LottieAnimation from "../components/shared/LottieAnimation";

// data
import animation from "../data/animation/loader.json";

const PageNotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-3/4 sm:w-1/2 lg:w-2/5 xl:w-1/4">
        <p className="font-lato tracking-widest animate-pulse mb-6 xl:mb-10 text-center xl:text-2xl text-red-700 font-semibold p-2">
          Page Not Found
        </p>
        <LottieAnimation data={animation} />
        <Link href="/">
          <p className="mt-6 xl:mt-10 text-center xl:text-xl text-tertiary-70 border p-1 xl:p-2 w-full">
            Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
