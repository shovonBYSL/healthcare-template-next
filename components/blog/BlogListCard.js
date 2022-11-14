import Image from "next/legacy/image";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const BlogListCard = ({ data, children }) => {
  const { title, summary, cardImg, author, authorImg, comments, likes } = data;

  const Icon = ({ img, image }) => {
    return (
      <div className="relative h-3 md:h-4 2xl:h-6 w-3 md:w-4 2xl:w-6 shrink-0">
        <Image
          src={image ? image : `/images/icons/blog/${img}.svg`}
          alt="icon"
          layout="fill"
        />
      </div>
    );
  };

  const Stats = ({ img, image, label, bold }) => {
    return (
      <div className="flex items-center gap-2">
        <Icon img={img} image={image} />
        <p
          className={`w-full text-tertiary-500 ${
            bold && "font-medium"
          } text-xxxs xxs:text-xxs 2xl:text-sm`}
        >
          {label}
        </p>
      </div>
    );
  };

  return (
    <div>
      <Image src={cardImg} alt="blog" height={419} width={966} />
      <div
        className={`${
          children ? "py-2 xl:py-6" : "p-2 xl:p-6"
        } border-b border-tertiary-500`}
      >
        <p className="text-tertiary-500 font-semibold lg:text-lg 2xl:text-2xl mb-2">
          {title}
        </p>
        <p className="text-tertiary-600 text-xs xl:text-sm">{summary}</p>
        {children}
      </div>
      <div
        className={`${
          !children && "xl:px-6"
        } px-2 py-2 xl:py-4 flex flex-col md:flex-row gap-2 items-center justify-between`}
      >
        <div className="w-full md:w-max flex items-center justify-between md:justify-start gap-3 xl:gap-6">
          <Stats image={authorImg} label={author} bold />
          <div className="flex gap-3 xl:gap-6">
            <Stats
              img="chat"
              label={`${comments.length} ${
                comments.length > 1 ? "Comments" : "Comment"
              }`}
            />
            <Stats img="heart" label={`${likes} Likes`} />
          </div>
        </div>
        <div className="w-max flex items-center gap-3 ml-auto ">
          <Stats img="share" label="Share" />
          <LinkedinShareButton url={window.location.href}>
            <Icon img="linkedIn" />
          </LinkedinShareButton>
          <FacebookShareButton url={window.location.href}>
            <Icon img="facebook" />
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href}>
            <Icon img="twitter" />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
