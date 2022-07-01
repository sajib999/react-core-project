import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "../src/sass/style.scss";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  const { title, dates, duties, company } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        <h1>Experience</h1>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => (
            <button
              key={index}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && "active-btn"}`}>
              {item.company}
            </button>
          ))}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => (
            <div key={index} className='job-desc'>
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
      <button className='btn' type='button'>
        More Info
      </button>
    </section>
  );
};

export default App;
