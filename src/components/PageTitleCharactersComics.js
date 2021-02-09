import "../Reset.css";
import "../App.css";

const PageTitleCharactersComics = ({ name }) => {
  return (
    <div className="wrapper-title">
      <div className="h1-comics-character">
        <h1>MARVEL Comics about</h1>
        <h1 className="h1-comics-character-name">&nbsp;{name}</h1>
      </div>
    </div>
  );
};

export default PageTitleCharactersComics;
