import React from "react";

const StatusMessage = ({winner, current}) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && `Winner is ${winner}`}
      {!winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : '0'}`}
      {!winner && noMovesLeft && 'X and 0 tied'}
    </div>
  );
};

export default StatusMessage;
