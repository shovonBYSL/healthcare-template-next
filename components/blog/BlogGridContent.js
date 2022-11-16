import { useState } from "react";
import ReactPaginate from "react-paginate";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// component
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";
import BlogGridCard from "./BlogGridCard";

// utility function
import { scrollTop } from "../../utils/commonFunctions";

const BlogGridContent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 6;
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
      className="container py-6 md:py-10 xl:py-16"
    >
      <SectionHeader label="Blogs" center />
      <SectionTitle label="News & updates" center />
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 mt-6 xl:mt-10">
        {data.slice(offset, offset + PER_PAGE).map((blog, i) => (
          <BlogGridCard key={i} data={blog} />
        ))}
      </div>
      <div className="mt-6 xl:mt-10">
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
  );
};

export default BlogGridContent;
