import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, totalItems, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      onPageChange(newPage);

      // Scroll to 160vh from the top of the page when a new page is clicked
      // const targetOffset = 50 * window.innerHeight / 100; // Calculate the offset in pixels
      // window.scrollTo({
      //   top:50,
      //   behavior: 'smooth', // Use 'smooth' for smooth scrolling
      // });


    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination w-100 d-flex justify-content-center align-items-center">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {renderPaginationButtons()}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
