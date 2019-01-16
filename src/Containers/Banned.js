import React, { Component } from "react";
import DogCard from '../Components/DogCard'

const Banned = props => {
  return (<div className="banned">
  {props.dogs.map(dog => {
    return <DogCard key={dog.id} dog={dog} handleClick={() => props.handleClick(dog)} handleBanClick={() => props.handleUnBanClick(dog)}/>
  })}
</div>);
};

export default Banned;
