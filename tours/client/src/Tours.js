import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tour</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour {...tour} key={tour.id} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
