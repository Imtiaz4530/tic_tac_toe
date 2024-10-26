import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddPlayers from "./pages/AddPlayers";
import Game from "./pages/Game";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add_players" element={<AddPlayers />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default App;
