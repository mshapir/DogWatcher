import React, { Component } from "react";
import DogCard from "../Components/DogCard";
const Favorites = props => {
  //Go into props object. Find the key of dogs and save its value to a variable named dogs
  let { dogs } = props;
  let dogsArray = dogs.map(dog => (
    <DogCard
      key={dog.id}
      dog={dog}
      parent="favorites"
      handleClick={props.handleClick}
    />
  ));

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {dogsArray}
    </div>
  );
};

export default Favorites;
