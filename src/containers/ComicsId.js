import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../Reset.css";
import "../App.css";
import PageTitleCharactersComics from "../components/PageTitleCharactersComics";
import ComicsPageAboutCharacter from "../components/ComicsPageAboutCharacter";
import ComicsPageAboutComics from "../components/ComicsPageAboutComics";

const ComicsId = ({ toggleComicFavorite, toggleCharFavorite }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchData = async (req, res) => {
      await axios
        .get(`https://grubux-marvel.herokuapp.com/comics/${params.characterid}`)
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, [params]);

  console.log(data);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="wrapper">
        <PageTitleCharactersComics name={data[0].name} />
        <div className="wrapper">
          <div className="wrapper-body-comic-page">
            <ComicsPageAboutCharacter
              data={data}
              toggleCharFavorite={toggleCharFavorite}
            />
            <ComicsPageAboutComics
              toggleComicFavorite={toggleComicFavorite}
              data={data}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComicsId;
