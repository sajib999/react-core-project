import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Follower from "./Follower";
import "../src/sass/style.scss";

const App = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, data, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? "loading..." : "Pagination"}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPage}>
            Prev
          </button>
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => handlePage(index)}
              className={`page-btn ${index === page ? "active-btn" : null}`}>
              {index + 1}
            </button>
          ))}
          <button className='next-btn' onClick={nextPage}>
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
