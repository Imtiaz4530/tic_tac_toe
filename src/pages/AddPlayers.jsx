import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addPlayers.css";

function AddPlayers() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const navigate = useNavigate();

  const handlePlay = () => {
    if (player1 && player2) {
      navigate("/game", { state: { player1, player2 } });
    }
  };

  return (
    <div className="add-players-page">
      <h2>Enter Player Names</h2>
      <input
        type="text"
        placeholder="Player 1"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Player 2"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}

export default AddPlayers;
