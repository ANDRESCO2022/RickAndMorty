import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ MortyUrl }) => {
  const [morty, setMorty] = useState({});
  useEffect(() => {
    axios.get(MortyUrl).then((res) => setMorty(res.data));
  }, [MortyUrl]);
  return (
    <div className="card-Morty">
      <img src={morty.image} alt="" />
      <div className="card-MortyInfo">
        <li> {morty.name}</li>
        <li> {morty.status}</li>
        <li>
          <b>Origin:</b> {morty.origin?.name}
        </li>
        <li>
          <b>Where appear:</b> {morty.episode?.length}
        </li>
      </div>
    </div>
  );
};

export default ResidentInfo;
