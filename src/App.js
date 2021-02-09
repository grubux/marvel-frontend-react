import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import ComicsId from "./containers/ComicsId";
import FavoritesPage from "./containers/FavoritesPage";
import Header from "./components/Header";
import "./Reset.css";
import "./App.css";

const App = () => {
  //
  const [favorite, setFavorite] = useState("white");
  const [oneComic, setOneComic] = useState(true);

  const toggleCharFavorite = (characterFav) => {
    const favorites = JSON.parse(localStorage.getItem("favorites_chars"))
      ? JSON.parse(localStorage.getItem("favorites_chars"))
      : [];
    favorites.push(characterFav);
    localStorage.setItem("favorites_chars", JSON.stringify(favorites));
  };

  const toggleComicFavorite = (characterFav) => {
    const favorites = JSON.parse(localStorage.getItem("favorites_comics"))
      ? JSON.parse(localStorage.getItem("favorites_comics"))
      : [];
    favorites.push(characterFav);
    localStorage.setItem("favorites_comics", JSON.stringify(favorites));
    setOneComic(false);
  };
  //

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/characters">
            <Characters toggleCharFavorite={toggleCharFavorite} />
          </Route>
          <Route path="/comics/:characterid">
            <ComicsId
              toggleComicFavorite={toggleComicFavorite}
              toggleCharFavorite={toggleCharFavorite}
            />
          </Route>
          <Route path="/comics">
            <Comics toggleComicFavorite={toggleComicFavorite} />
          </Route>
          <Route path="/favorites">
            <FavoritesPage toggleCharFavorite={toggleCharFavorite} />
          </Route>
          <Route path="/">
            <Characters />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
