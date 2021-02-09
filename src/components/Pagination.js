const Pagination = ({ page, setPage, count, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(count.count / 100); i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers);

  return (
    <div className="wrapper max-width">
      <ul className="pagination">
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

export default Pagination;
