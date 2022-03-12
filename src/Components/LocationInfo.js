import React, { useEffect, useState } from "react";
import axios from "axios";
import ResidentsList from "./ResidentsList";
import SearchBox from "./SearchBox";

const LocationInfo = () => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => {
        setCharacter(res.data);
           });
  }, []);
  return (
    <div className="container">
      <h1>Rick and Morty Wiki</h1>
      <SearchBox setCharacter={setCharacter} />
      <h2>{character.name}</h2>
      <div className="random-info">
          <p>
             <b>Type:</b> {character.type}
          </p>
          <p>
             <b>Dimension:</b> {character.dimension}
          </p>
          <p>
             <b> Population:</b> {character.residents?.length}
          </p>
      </div>
      <h3>Residents</h3>
      <div className="card-row">
        <ResidentsList residents={character.residents} />
      </div>
    </div>
  );
};

export default LocationInfo;
