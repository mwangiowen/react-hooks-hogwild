// HogList.js

import React from "react";
import HogTile from "./HogTitle"; // Adjust the path if needed

const HogList = ({ hogs, onHogClick, onGreasedFilter, onSortChange }) => {
  return (
    <div>
      <button onClick={onGreasedFilter}>Toggle Greased</button>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">No Sort</option>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
      <div className="ui grid container">
        {hogs.map((hog) => (
          <HogTile key={hog.name} hog={hog} onClick={() => onHogClick(hog)} />
        ))}
      </div>
    </div>
  );
};

export default HogList;
