import { useEffect, useState } from "react";
import axios from "axios";

import Charactersbody from "../components/Charactersbody";
import ComicsBody from "../components/ComicsBody";

const FavoritesPage = ({ toggleCharFavorite, toggleComicFavorite }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [favoritesChar, setFavoritesChar] = useState("");
  const [favoritesComics, setFavoritesComics] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getFavChars = () => {
      console.log("starting effect chars");
      const chars = JSON.parse(localStorage.getItem("favorites_chars"));
      setFavoritesChar(chars);
    };
    const getFavComics = () => {
      console.log("starting effect comics");
      const comics = [];
      const comicsRef = JSON.parse(localStorage.getItem("favorites_comics"));
      comics.push(comicsRef);
      setFavoritesComics(comics);
    };
    getFavComics();
    getFavChars();
    setIsLoading(false);
  }, []);

  const handleSubmit = async () => {
    await axios
      .get(`https://grubux-marvel.herokuapp.com/?name=${favoritesChar}`)
      .then((response) => {
        setFavoritesChar(response.favoritesChar);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="wrapper">
        <main className="fav-container">
          <div>
            <h1>Fav Characters</h1>
            <div className="fav-chars">
              <Charactersbody
                name={name}
                setName={setName}
                handleSubmit={handleSubmit}
                data={favoritesChar}
                toggleCharFavorite={toggleCharFavorite}
              />
            </div>
          </div>
          <div className="fav-section">
            <h1>Favorite Comics</h1>
            <div className="fav-comics">
              <ComicsBody
                title={title}
                setTitle={setTitle}
                data={favoritesComics}
                toggleComicFavorite={toggleComicFavorite}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FavoritesPage;
