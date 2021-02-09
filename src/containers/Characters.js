import { useState, useEffect } from "react";
import axios from "axios";

import "../Reset.css";
import "../App.css";
import PageTitleCharacters from "../components/PageTitleCharacters";
import Charactersbody from "../components/Charactersbody";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

const Characters = ({ toggleCharFavorite }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = async () => {
    await axios
      .get(`http://localhost:3001/characters?name=${name}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const paginate = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const fetchData = async (req, res) => {
      await axios
        .get(`http://localhost:3001/characters?page=${page}`)
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, [page]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <PageTitleCharacters />
      <Pagination page={page} count={data[1]} paginate={paginate} />
      <Search name={name} setName={setName} handleSubmit={handleSubmit} />
      <Charactersbody
        name={name}
        setName={setName}
        handleSubmit={handleSubmit}
        data={data[0]}
        toggleCharFavorite={toggleCharFavorite}
      />
      <Pagination page={page} count={data[1]} paginate={paginate} />
    </>
  );
};

export default Characters;
