import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState();
  const { isLoading, data: movies, error } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
