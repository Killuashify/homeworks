import React from "react";

function EntityCard() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Entity Name</h5>
        <p className="card-text">Some basic info about the entity.</p>
        <button className="btn btn-outline-primary btn-sm">Details</button>
      </div>
    </div>
  );
}

export default EntityCard;
