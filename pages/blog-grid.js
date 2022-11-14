import { useEffect, useState } from "react";

// components
import Preloader from "../components/shared/Preloader";
import BasicLayout from "../layouts/BasicLayout";
import CommonBanner from "../components/shared/CommonBanner";
import BlogGridContent from "../components/blog/BlogGridContent";

// data
import { blogBannerData, blogData } from "../data/blogData";

const BlogGrid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (blogBannerData && blogData) {
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  return (
    <BasicLayout head="Blog Grid">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <CommonBanner data={blogBannerData} />
          <BlogGridContent data={blogData} />
        </>
      )}
    </BasicLayout>
  );
};

export default BlogGrid;
