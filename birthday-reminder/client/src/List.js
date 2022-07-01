import React from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <h4>{age}</h4>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
