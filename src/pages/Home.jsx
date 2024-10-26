import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/add_players");
  };

  return (
    <div className="home-page">
      <h1>Welcome to Tic-Tac-Toe</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default Home;
