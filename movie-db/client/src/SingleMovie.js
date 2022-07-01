import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movies } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className='loading'></div>;
  }

  if (error.show) {
    return (
      <div className='error-page'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          Back To Movies
        </Link>
      </div>
    );
  }

  const { Poster: poster, Year: year, Title: title, Plot: plot } = movies;

  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h1>{title}</h1>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          Back To Movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
