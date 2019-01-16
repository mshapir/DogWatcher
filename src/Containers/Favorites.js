import React, { Component } from "react";
import DogCard from '../Components/DogCard'

const Favorites = props => {
  console.log('fav', props);
  return (<div className="favorites">
  {props.dogs.map(dog => {
    return <DogCard key={dog.id} dog={dog} handleClick={() => props.handleClick(dog)}/>
  })}
</div>);
};

export default Favorites;
