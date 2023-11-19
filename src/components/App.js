import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogsData from "../porkers_data";

function App() {
  const [selectedHog, setSelectedHog] = useState(null);
  const [greasedFilter, setGreasedFilter] = useState(false);
  const [sortType, setSortType] = useState(null);

  const handleHogClick = (hog) => {
    setSelectedHog(hog);
  };

  const handleGreasedFilter = () => {
    setGreasedFilter(!greasedFilter);
  };

  const handleSortChange = (type) => {
    setSortType(type);
  };

  const getFilteredAndSortedHogs = () => {
    let filteredHogs = hogsData;

    if (greasedFilter) {
      filteredHogs = filteredHogs.filter((hog) => hog.greased);
    }

    if (sortType === "name") {
      filteredHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "weight") {
      filteredHogs.sort((a, b) => a.weight - b.weight);
    }

    return filteredHogs;
  };

  return (
    <div className="App">
      <Nav />
      <HogList
        hogs={getFilteredAndSortedHogs()}
        onHogClick={handleHogClick}
        onGreasedFilter={handleGreasedFilter}
        onSortChange={handleSortChange}
      />
      {selectedHog && (
        <div>
          <h2>{selectedHog.name}</h2>
          {/* Display other hog details here */}
        </div>
      )}
    </div>
  );
}

export default App;
