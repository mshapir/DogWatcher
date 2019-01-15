import React, { Component } from "react";
import DogCard from "../Components/DogCard";
const DogIndex = props => {
  //Go into props object. Find the key of dogs and save its value to a variable named dogs
  let { dogs, handleClick } = props;
  let dogsArray = dogs.map(dog => (
    <DogCard key={dog.id} dog={dog} handleClick={handleClick} />
  ));
  console.log("dog index", props);

  return (
    <div className="index">
      <h1>Index</h1>
      {dogsArray}
    </div>
  );
};

export default DogIndex;
