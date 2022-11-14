import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// components
import BlogListCard from "./BlogListCard";
import BlogSidebar from "./BlogSidebar";
import { scrollTop } from "../../utils/commonFunctions";

const BlogListContent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
    scrollTop();
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10"
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
          <div className="space-y-6 xl:space-y-10">
            {data.slice(offset, offset + PER_PAGE).map((item, i) => (
              <div key={i}>
                <Link href={`/blog-details/${item.slug}`}>
                  <BlogListCard data={item} />
                </Link>
              </div>
            ))}
          </div>
          <div className="py-6 xl:py-10 w-max ml-auto">
            <ReactPaginate
              previousLabel={<IoChevronBack className="xl:text-xl" />}
              nextLabel={<IoChevronForward className="xl:text-xl" />}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              renderOnZeroPageCount={null}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disable"}
              activeClassName={"pagination__link--active"}
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
          <BlogSidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default BlogListContent;
