const Search = ({ name, setName, handleSubmit }) => {
  return (
    <div className="wrapper max-width ">
      <div className="search">
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Search;
