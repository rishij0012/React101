import { useEffect, useState } from "react";

const baseUrl = "https://swapi.dev/api/";

const useFetchMovies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() { // we can use callback if we have external state management logic in it ??? 
    try {
      let movies = await fetch(baseUrl + "films/");
      movies = await movies.json();
      console.log("🚀 ~ file: App.js:18 ~ fetchMovies ~ movies:", movies);
      setMovies(movies);
    } catch (error) {
      console.log("🚀 ~ file: App.js:20 ~ fetchMovies ~ error:", error);
    }
  }

  return movies;
};

export default useFetchMovies;
