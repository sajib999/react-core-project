import React from "react";
import moment from "moment";

const Article = ({ title, date, length, snippet }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format("dddd do, YYYY")}</span>
        <span>{length}</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
