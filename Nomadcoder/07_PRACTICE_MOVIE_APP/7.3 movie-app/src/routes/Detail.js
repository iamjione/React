import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>{movie.title_long}</h1>
          <span>평점 | {movie.rating}</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>상영 시간 | {movie.runtime}분</span>
          <hr />
          <div>영화 설명</div>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
