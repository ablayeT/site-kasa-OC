import emptyStar from "../../Assets/images/emptyStar.svg";
import starRate from "../../Assets/images/star-rate.svg";

function Rate({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rate-comp">
      {stars.map((level) =>
        score >= level ? (
          <img
            key={level.toString()}
            className="star"
            src={starRate}
            alt="rating star"
          />
        ) : (
          //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
          <img
            key={level.toString()}
            className="star"
            src={emptyStar}
            alt="rating star"
          />
        )
      )}
    </div>
  );
}

export default Rate;
