import React from "react";
import EntityCard from "./EntityCard";

function EntityList() {
  const placeholders = Array(6).fill(null);

  return (
    <div className="row">
      {placeholders.map((_, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <EntityCard />
        </div>
      ))}
    </div>
  );
}

export default EntityList;
