// components
import BlogGridCard from "../blog/BlogGridCard";
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";

const FeaturedBlogs = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <SectionHeader label="Blogs" center />
      <SectionTitle label="News & updates" center />
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 mt-6 xl:mt-10">
        {data.map((blog, i) => (
          <BlogGridCard key={i} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
