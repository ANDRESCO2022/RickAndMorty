import React from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentsList = ({ residents }) => {
  return (
    <div className = "resident-list">
       {residents?.map((resident) => (
         <ResidentInfo MortyUrl={resident} key={resident} />
       ))}
    </div>
  );
};

export default ResidentsList;
