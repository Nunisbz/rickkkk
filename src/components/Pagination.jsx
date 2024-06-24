import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Voltar
      </button>
      <span>{currentPage} de {totalPages}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
