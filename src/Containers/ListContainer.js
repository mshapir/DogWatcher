import React, { Component } from "react";
import DogIndex from "./DogIndex";
import Favorites from "./Favorites";
import Banned from "./Banned";

class ListContainer extends Component {
  state = {
    dogs: [],
    favorites: [],
    banned: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/dogs")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          dogs: data
        })
      );
  }

  handleFavorite = dog => {
    let newFavorites = [...this.state.favorites, dog];
    this.setState({
      favorites: newFavorites
    });
  };
  handleUnfavorite = dogObj => {
    let favorites = [...this.state.favorites].filter(
      dog => dog.id !== dogObj.id
    );
    this.setState({
      favorites
    });
  };

  render() {
    console.log("favorites", this.state.favorites);
    return (
      <div className="list-container">
        <DogIndex dogs={this.state.dogs} handleClick={this.handleFavorite} />
        <Favorites
          dogs={this.state.favorites}
          handleClick={this.handleUnfavorite}
        />
        <Banned dogs={this.state.banned} />
      </div>
    );
  }
}

export default ListContainer;
