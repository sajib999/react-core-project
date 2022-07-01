import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}</h4>
      </div>
      <p>
        {readMore ? info : `${info.substring(0, 150)}...`}
        <button className='more-btn' onClick={() => setReadMore(!readMore)}>
          {readMore ? "Keep Less" : "show More"}
        </button>
      </p>
      <button className='delete-btn' onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
