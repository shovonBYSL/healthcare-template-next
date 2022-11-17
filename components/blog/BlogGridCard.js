import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineArrowRight } from "react-icons/hi";

const BlogGridCard = ({ data }) => {
  const { slug, title, author, summary, published, cardImg, likes, comments } =
    data;

  const router = useRouter();
  const homePath = router.pathname === "/";

  const Stats = ({ img, label }) => {
    return (
      <div className="flex items-center gap-1 xl:gap-2">
        <div className="relative h-4 2xl:h-6 w-4 2xl:w-6">
          <Image
            src={`/images/icons/blog/${img}.svg`}
            alt="author"
            layout="fill"
          />
        </div>
        <p className="w-full text-tertiary-500 font-medium text-xxs 2xl:text-sm">
          {label}
        </p>
      </div>
    );
  };

  return (
    <div className="rounded-2xl overflow-hidden group shadow-[0px_8px_16px_0px_rgba(145,158,171,0.16)]">
      <div className="h-[200px] 2xl:h-[295px] relative overflow-hidden">
        <Image
          src={cardImg}
          alt="blog"
          className="h-full w-full object-cover scale-[101%] group-hover:scale-105 transition-all duration-1000"
          layout="fill"
        />
        <p className="absolute bottom-5 left-4 bg-primary-600 text-white font-medium text-xs xl:text-sm rounded-sm xl:rounded px-2 xl:px-4 py-1 xl:py-2">
          {published}
        </p>
      </div>
      <div className="p-4 pb-6">
        <div className="flex items-center justify-between">
          <Stats img="user" label={author} />
          <Stats
            img="chat"
            label={`${comments.length} ${
              comments.length > 1 ? "Comments" : "Comment"
            }`}
          />
          <Stats img="heart" label={`${likes} Likes`} />
        </div>
        <p className="text-tertiary-600 font-semibold 2xl:text-xl mt-3">
          {title}
        </p>
        <p className="text-tertiary-400 text-xs 2xl:text-sm mt-1.5 mb-4 xl:mb-6">
          {summary.slice(0, 140)}...
        </p>
        <Link href={`/blog-details/${slug}`}>
          <div
            className={`${
              homePath
                ? "w-max border border-primary-600 text-primary-600 px-6"
                : "w-full bg-primary-600"
            } rounded-lg py-2 text-white font-medium text-xs 2xl:text-base flex items-center justify-center`}
          >
            <div className="flex items-center gap-1">
              <span>Read More</span>
              <HiOutlineArrowRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogGridCard;
