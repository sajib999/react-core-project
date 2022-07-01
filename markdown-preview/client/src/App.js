import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "../src/sass/style.scss";

const App = () => {
  const [markdown, setMarkdown] = useState("Ishaq");
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
};

export default App;
