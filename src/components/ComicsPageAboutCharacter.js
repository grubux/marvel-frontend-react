import "../Reset.css";
import "../App.css";

const ComicsPageAboutCharacter = ({
  name,
  setName,
  handleSubmit,
  data,
  toggleCharFavorite,
}) => {
  console.log(data[0]);

  return (
    <>
      <div className="character-comic-page">
        <div>
          <svg
            onClick={() => {
              let comics = [];
              for (let i = 0; i < data[1].length; i++) {
                console.log(data[1].length);
                console.log(data[1][i]);
                comics.push(data[1][i].comicId);
              }
              toggleCharFavorite({
                comics: comics,
                description: data[0].description,
                id: data[0].id,
                name: data[0].name,
                picture: data[0].mainpicture,
              });
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <span className="character-comic-page-name">{data[0].name}</span>
        </div>
        <img
          className="character-comic-page-image"
          src={data[0].mainpicture}
          alt={data[0].name}
        />
        <div className="character-comic-page-description">
          {data[0].description}
        </div>
      </div>
    </>
  );
};

export default ComicsPageAboutCharacter;
