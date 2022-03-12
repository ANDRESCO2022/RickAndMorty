import axios from "axios";
import React, { useState } from "react";

const SearchBox = ({ setCharacter }) => {
  const [state, setState] = useState("");
  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${state}/`)
      .then((res) => {
        setCharacter(res.data);
      });
  };
  return (
    <div className="search-Morty">
      <input
        type="text" placeholder="Search-location"
         onChange={(e) => setState(e.target.value)}
         value={state}
      />
      <button onClick={searchType}>search</button>
    </div>
  );
};

export default SearchBox;
