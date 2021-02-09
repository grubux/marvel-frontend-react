import "../Reset.css";
import "../App.css";

const ComicsBody = ({ data, toggleComicFavorite, oneComic }) => {
  console.log(data);
  return oneComic ? (
    <div>No comics saved ! </div>
  ) : (
    <>
      <div className="wrapper max-width">
        <div className="wrapper-body-comic">
          <div>
            <ul className="list">
              {data[0].map((comic, index) => {
                return (
                  <li key={index} className="each-comic">
                    <div>
                      <svg
                        onClick={() => {
                          toggleComicFavorite({
                            comics: comic.comics,
                            description: comic.description,
                            id: comic.id,
                            title: comic.title,
                            picture: comic.picture,
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
                      <span className="each-comic-name">{comic.title}</span>
                    </div>
                    <img src={comic.picture} alt={comic.title} />
                    <div className="each-comic-description">
                      {comic.description}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default ComicsBody;
