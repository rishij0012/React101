import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import useFetchMovies from "./utils/useMovieFetch";



function App() {
  

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const movies = useFetchMovies();

  return (
    <React.Fragment>
      <section>
        <button onClick={() => {}}>Fetch Movies</button>
      </section>
      <section>
        {!movies && <p>Movies not available</p>}
        {movies && <MoviesList movies={movies.results} />}
      </section>
    </React.Fragment>
  );
}

export default App;
