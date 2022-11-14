import { useEffect, useState } from "react";

// components
import Preloader from "../components/shared/Preloader";
import BasicLayout from "../layouts/BasicLayout";
import BlogListContent from "../components/blog/BlogListContent";

// data
import { blogBannerData, blogData } from "../data/blogData";

const BlogList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (blogBannerData && blogData) {
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  return (
    <BasicLayout head="Blog List">
      {isLoading ? <Preloader /> : <BlogListContent data={blogData} />}
    </BasicLayout>
  );
};

export default BlogList;
