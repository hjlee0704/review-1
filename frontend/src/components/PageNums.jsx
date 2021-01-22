/* eslint-disable react/prop-types */
import React from 'react';

const PageNums = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  const thisPage = (num) => {
    if (num === currentPage) {
      return 'current pageNum';
    }
    return 'pageNum';
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pageNumbers">
      {pageNumbers.map((number) => (
        <a href onClick={() => paginate(number)} className={thisPage(number)}>{number}</a>
      ))}
    </div>
  );
};

export default PageNums;
