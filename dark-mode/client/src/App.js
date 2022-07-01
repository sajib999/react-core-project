import React, { useEffect, useState } from "react";
import Article from "./Article";
import data from "./data";
import "../src/sass/style.scss";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const App = () => {
  const [theme, setTheme] = useState(getStorageTheme);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h2>Over-Reacted</h2>
          <button type='submit' className='btn' onClick={toggleTheme}>
            Toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
};

export default App;
