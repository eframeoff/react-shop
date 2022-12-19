import React from "react";
import ReactPaginate from "react-paginate";
import classes from "./Pagination.module.scss";

const Pagination = ({ onChange }) => {
  return (
    <div className={classes.pagination}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChange(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
