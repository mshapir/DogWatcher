import React from "react";

const DogCard = (props) => {
  console.log(props.dog);
  return <div>
    <img alt='' src={props.dog.img}/><br />
    <div>
      <button onClick={() => props.handleClick(props.dog)}>{props.parent === 'dogIndex' ? 'Favorite' : 'Unfavorite'}</button>
      <button onClick={() => props.handleBanClick(props.dog)}>{props.parent === 'dogIndex'? 'Ban' : 'UnBan'}</button>
    </div>
  </div>;
};

export default DogCard;
