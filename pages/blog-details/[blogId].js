import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// components
import BlogSidebar from "../../components/blog/BlogSidebar";
import BasicLayout from "../../layouts/BasicLayout";
import Preloader from "../../components/shared/Preloader";
import BlogListCard from "../../components/blog/BlogListCard";
import BlogComment from "../../components/blog/BlogComment";
import BlogDoctorInfoCard from "../../components/blog/BlogDoctorInfoCard";

// data
import { blogData } from "../../data/blogData";
import { allDoctors } from "../../data/doctorsData";

const SingleBlog = () => {
  const router = useRouter()
  const { blogId } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [blogDetailsData, setBlogDetailsData] = useState({});
  const [doctorData, setDoctorData] = useState({});

  useEffect(() => {
    if (blogData && blogId && allDoctors) {
      setBlogDetailsData(blogData.find((data) => data.slug === blogId));
      setDoctorData(
        allDoctors.find((data) => data.name === blogDetailsData.author)
      );
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [blogId, blogDetailsData]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <BasicLayout head={blogDetailsData.title}>
          <div className="container py-6 md:py-10">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
                <BlogListCard data={blogDetailsData}>
                  <div className="space-y-4 xl:space-y-6">
                    {blogDetailsData.content.map((item, i) => {
                      return (
                        <div key={i}>
                          {item.quote ? (
                            <p className="italic text-tertiary-800 font-medium text-xs xl:text-sm md:ml-4 pl-4 border-l-4 border-tertiary-500">
                              “{item.quote}”
                            </p>
                          ) : (
                            <p className="text-tertiary-600 text-xs xl:text-sm">
                              {item.paragraph}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </BlogListCard>
                <div className="p-4 xl:px-6 bg-tertiary-30 rounded flex flex-wrap items-center gap-4">
                  <p className="text-sm font-semibold w-full md:w-20">Tags :</p>
                  <div className="flex flex-wrap gap-2 xl:gap-3">
                    {blogDetailsData.tags.map((item, i) => (
                      <p
                        key={i}
                        className="text-tertiary-700 px-1.5 xl:px-2 py-1 border border-tertiary-80 rounded text-xxs xl:text-sm"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <BlogDoctorInfoCard data={doctorData} />
                <BlogComment data={blogDetailsData} />
              </div>
              <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
                <BlogSidebar data={blogData} />
              </div>
            </div>
          </div>
        </BasicLayout>
      )}
    </>
  );
};

export default SingleBlog;
