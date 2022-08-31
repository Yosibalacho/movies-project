import { createContext, useEffect, useState } from "react";

export const moviesContext = createContext();

export default function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoviesApi().then((res) => setMovies(res));
  }, []);

  return (
    <moviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </moviesContext.Provider>
  );
}
