import Image from "next/legacy/image";

const BlogComment = ({ data }) => {
  const { comments } = data;

  const handleComment = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="py-6">
        <p className="text-tertiary-600 font-semibold xl:text-xl">
          {`${comments.length} ${comments.length > 1 ? "Comments" : "Comment"}`}
        </p>

        <div className="divide-y divide-tertiary-50">
          {comments.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-4 py-4 xl:py-6"
              >
                <div className="hidden xl:block shrink-0">
                  <Image
                    src="/images/blog/blogs/author.png"
                    alt="user"
                    height={70}
                    width={70}
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="xl:hidden">
                      <Image
                        src="/images/blog/blogs/author.png"
                        alt="user"
                        height={24}
                        width={24}
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <p className="font-lato font-semibold italic text-sm xl:text-base">
                      {item.name}
                    </p>
                  </div>
                  <p className="text-tertiary-500 text-xs xl:text-sm font-lato font-semibold italic mt-2">
                    {item.comment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-tertiary-600 font-semibold xl:text-xl pb-4 xl:pb-6">
          Leave a Comment
        </p>
        <form onSubmit={handleComment} className="space-y-2 xl:space-y-4">
          <textarea
            type="text"
            rows="5"
            placeholder="Your comment here..."
            className="w-full bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2 md:p-4 text-xs lg:text-sm xl:text-base outline-0 resize-none transition-all duration-300"
          />
          <div className="grid grid-cols-12 gap-4 xl:gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full col-span-12 md:col-span-5 bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2 md:p-4 text-xs lg:text-sm xl:text-base outline-0 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full col-span-12 md:col-span-7 bg-transparent text-tertiary-300 placeholder-tertiary-300 border focus:border-tertiary-50 rounded px-3 py-2 md:p-4 text-xs lg:text-sm xl:text-base outline-0 transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="z-10 relative overflow-hidden btn-slide-secondary px-6 py-2 rounded-lg text-white text-xs md:text-sm xl:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogComment;
