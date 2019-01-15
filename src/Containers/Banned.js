import React, { Component } from "react";
import DogCard from "../Components/DogCard";
const Banned = props => {
  //Go into props object. Find the key of dogs and save its value to a variable named dogs
  let { dogs } = props;
  let dogsArray = dogs.map(dog => <DogCard key={dog.id} dog={dog} />);

  return (
    <div className="banned">
      <h1>Banned</h1>
      {dogsArray}
    </div>
  );
};

export default Banned;
