import { useEffect, useState } from "react";
import Paginate from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(Paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { loading, data };
};

export default useFetch;
