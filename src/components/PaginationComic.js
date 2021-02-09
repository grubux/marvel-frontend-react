const PaginationComic = ({ page, setPage, count, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(count.count / 100); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="wrapper max-width ">
      <ul className="pagination-comic">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                href="#!"
                onClick={() => {
                  paginate(number);
                }}
                className={page === number && "active"}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaginationComic;
