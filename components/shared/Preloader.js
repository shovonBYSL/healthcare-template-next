import LottieAnimation from "./LottieAnimation";

// data
import animation from "../../data/animation/loader.json";

const Preloader = () => {
  return (
    <div className="fixed left-0 top-0 bg-white z-[999] h-screen w-screen flex justify-center items-center">
      <div className="w-3/4 sm:w-1/2 lg:w-2/5 xl:w-1/4">
        <LottieAnimation data={animation} />
      </div>
    </div>
  );
};

export default Preloader;
