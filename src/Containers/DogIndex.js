import React, { Component } from "react";
import DogCard from '../Components/DogCard'

const DogIndex = props => {

  return (<div className="index">
  {props.dogs.map((dog, index) => {
    return (<DogCard key={dog.id} dog={dog} handleClick={props.handleClick} parent='dogIndex' handleBanClick={props.handleBanClick}/>)

  })}
  </div>)
};

export default DogIndex;
