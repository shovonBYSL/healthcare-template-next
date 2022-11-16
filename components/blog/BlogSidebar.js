import Image from "next/legacy/image";
import Link from "next/link";
import StickyBox from "react-sticky-box";

// data
import { categories } from "../../data/blogData";

// utility function
import { scrollTop } from "../../utils/commonFunctions";

const BlogSidebar = ({ data }) => {
  const popularBlogs = data.sort(
    (a, b) => parseFloat(b.likes) - parseFloat(a.likes)
  );

  const findNum = (label) => {
    const total = data.filter(
      (item) => item.category.toLowerCase() === label.toLowerCase()
    );
    return total.length;
  };

  const SidebarTitle = ({ label }) => (
    <p className="text-sm xl:text-base font-semibold px-2.5 mt-6">{label}</p>
  );

  const SideItems = ({ data, label }) => {
    return (
      <>
        <SidebarTitle label={label} />
        <div className="mt-6 space-y-5">
          {data.map(({ id, slug, title, published, cardImgSm }) => {
            return (
              <div key={id}>
                <Link onClick={scrollTop} href={`/blog-details/${slug}`}>
                  <div className="flex gap-4">
                    <div className="relative h-10 xl:h-12 w-10 xl:w-12">
                      <Image
                        src={cardImgSm}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-tertiary-600 font-medium text-xs xl:text-sm">
                        {title}
                      </p>
                      <p className="text-tertiary-90 text-xs xl:text-sm">
                        {published}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <StickyBox offsetTop={100}>
      <div className="w-full">
        <div className="relative focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Image
              src="/images/icons/search.svg"
              alt="search"
              className="!p-2 xl:!p-1.5"
              height={29}
              width={28}
            />
          </span>
          <input
            type="text"
            placeholder="Search Blog"
            className="col-span-2 md:col-span-1 pl-10 w-full bg-transparent text-tertiary-500 placeholder-tertiary-500 border border-tertiary-50 focus:border-tertiary-100 rounded px-3 py-2 xl:py-2.5 text-xs xl:text-sm outline-0 transition-all duration-300"
          />
        </div>

        <SidebarTitle label="Categories" />
        <div className="space-y-3 mt-3">
          {categories.map((label, i) => (
            <p
              key={i}
              className="px-2.5 py-1 border-b text-xs xl:text-sm capitalize"
            >
              {label} ({findNum(label)})
            </p>
          ))}
        </div>

        <SideItems label="Recent Posts" data={data.slice(1).slice(-4)} />

        <div className="mt-6 relative h-[360px] w-full rounded-xl overflow-hidden">
          <Image
            src="/images/blog/blog_quote.png"
            alt="quote"
            objectFit="cover"
            layout="fill"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-7 text-center">
            <p className="text-white text-2xl font-semibold mb-4 leading-9">
              Get Free Consultations
            </p>
            <p className="text-white mb-6">Special advisors</p>
            <button className="bg-white w-max mx-auto text-xs font-medium text-tertiary-600 px-4 py-2 rounded-full">
              Get a quote
            </button>
          </div>
        </div>

        <SideItems label="Popular Posts" data={popularBlogs.slice(0, 4)} />
      </div>
    </StickyBox>
  );
};

export default BlogSidebar;
