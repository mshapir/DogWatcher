import React, { Component } from "react";
import DogIndex from "./DogIndex";
import Favorites from "./Favorites";
import Banned from "./Banned";

class ListContainer extends Component {
  state={
    dogs: [],
    favorites: [],
    banned: [],
  }

  fetchDogs = () => {
    fetch('http://localhost:3000/dogs')
    .then(r => r.json())
    .then(data => {
      this.setState({
        dogs: data
      })
    })
  }

  componentDidMount() {
    this.fetchDogs()
  }

handleFavoritesClick = (dogObj) => {
  const favorites = [...this.state.favorites, dogObj]
  this.setState({
    favorites
  })
}

handleUnfavoritesClick = (dogObj) => {
  const favorites = [...this.state.favorites].filter(
    dog => dog.id !== dogObj.id
  )
  this.setState({
    favorites
  })
}

handleBanClick = (dogObj) => {
  const banned = [...this.state.banned, dogObj]
  this.setState({
    banned
  })
}

handleUnbanClick = (dogObj) => {
  const banned = [...this.state.banned].filter(dog => dog.id !== dogObj.id)
  this.setState({
    banned
  })
}


  render() {
    return (<div className="list-container" >
      <h1>Index</h1><br />
      <DogIndex dogs={this.state.dogs} handleClick={this.handleFavoritesClick} handleBanClick={this.handleBanClick} />
      <h1>Favorites</h1>
      <Favorites dogs={this.state.favorites} handleClick={this.handleUnfavoritesClick}/>
      <h1>Banned</h1>
      <Banned dogs={this.state.banned} handleUnBanClick={this.handleUnbanClick}/>

    </div>)
  }
}

export default ListContainer;
