import React from "react";

const DogCard = ({ dog, handleClick, parent }) => {
  console.log("dog card", dog);
  return (
    <div>
      <li>
        <h2>{dog.name}</h2>
        <img alt="" src={dog.img} />
        <h3>{dog.breed}</h3>
        <h3>{dog["age in human years"]}</h3>
        <h3>{dog["default-mood"]}</h3>
        {parent === "favorites" ? (
          <button onClick={() => handleClick(dog)}>Unfavorite</button>
        ) : (
          <button onClick={() => handleClick(dog)}>Favorite</button>
        )}

        <button>Ban</button>
      </li>
    </div>
  );
};

export default DogCard;
