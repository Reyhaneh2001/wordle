import React from "react";
import Cell from "./Cell";

function Board() {
  return (
    <div className="board">
      {" "}
      <div className="row">
        <Cell letterPos={0} attemptVal={0} />
        <Cell letterPos={1} attemptVal={0} />
        <Cell letterPos={2} attemptVal={0} />
        <Cell letterPos={3} attemptVal={0} />
        <Cell letterPos={4} attemptVal={0} />
      </div>
      <div className="row">
        <Cell letterPos={0} attemptVal={1} />
        <Cell letterPos={1} attemptVal={1} />
        <Cell letterPos={2} attemptVal={1} />
        <Cell letterPos={3} attemptVal={1} />
        <Cell letterPos={4} attemptVal={1} />
      </div>
      <div className="row">
        <Cell letterPos={0} attemptVal={2} />
        <Cell letterPos={1} attemptVal={2} />
        <Cell letterPos={2} attemptVal={2} />
        <Cell letterPos={3} attemptVal={2} />
        <Cell letterPos={4} attemptVal={2} />
      </div>
      <div className="row">
        <Cell letterPos={1} attemptVal={3} />
        <Cell letterPos={0} attemptVal={3} />
        <Cell letterPos={2} attemptVal={3} />
        <Cell letterPos={3} attemptVal={3} />
        <Cell letterPos={4} attemptVal={3} />
      </div>
      <div className="row">
        <Cell letterPos={0} attemptVal={4} />
        <Cell letterPos={1} attemptVal={4} />
        <Cell letterPos={2} attemptVal={4} />
        <Cell letterPos={3} attemptVal={4} />
        <Cell letterPos={4} attemptVal={4} />
      </div>
      <div className="row">
        <Cell letterPos={0} attemptVal={5} />
        <Cell letterPos={1} attemptVal={5} />
        <Cell letterPos={2} attemptVal={5} />
        <Cell letterPos={3} attemptVal={5} />
        <Cell letterPos={4} attemptVal={5} />
      </div>
    </div>
  );
}

export default Board;