import React, { useState } from "react";
import List from "./List";
import data from "./data";
import "./sass/style.scss";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h1>Birthdays Today</h1>
        <List people={people} />
        <button onClick={() => setPeople([])}>All Clear</button>
      </section>
    </main>
  );
};

export default App;
