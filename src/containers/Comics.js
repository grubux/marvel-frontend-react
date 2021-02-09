import { useState, useEffect } from "react";
import axios from "axios";

import "../Reset.css";
import "../App.css";
import PageTitleComics from "../components/PageTitleComics";
import ComicsBody from "../components/ComicsBody";
import Search from "../components/Search";
import PaginationComic from "../components/PaginationComic";

const Comics = ({ toggleComicFavorite }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [comicsPage, setComicsPage] = useState(1);

  const handleSubmit = async () => {
    await axios
      .get(`http://localhost:3001/comics?title=${title}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const paginate = (comicsPage) => {
    setComicsPage(comicsPage);
  };

  useEffect(() => {
    const fetchData = async (req, res) => {
      await axios
        .get(`http://localhost:3001/comics?page=${comicsPage}`)
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, [comicsPage]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="wrapper">
        <PageTitleComics />
        <PaginationComic
          page={comicsPage}
          count={data[1]}
          paginate={paginate}
        />
        <Search name={title} setName={setTitle} handleSubmit={handleSubmit} />
        <ComicsBody
          title={title}
          setTitle={setTitle}
          data={data}
          toggleComicFavorite={toggleComicFavorite}
        />
        <PaginationComic
          page={comicsPage}
          count={data[1]}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Comics;
