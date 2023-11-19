// HogTile.js

import React from "react";

const HogTile = ({ hog, onClick }) => {
  return (
    <div className="ui eight wide column" onClick={onClick}>
      <img src={hog.image} alt={hog.name} />
      <h3>{hog.name}</h3>
    </div>
  );
};

export default HogTile;
