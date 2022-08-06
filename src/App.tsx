import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Container, Box } from "@mui/system";
import Launches from "./components/Launches";
import Navigation from "./components/Navigation";
import Details from "./components/Details/Details";
import Favorites from "./components/Favorites";

const App: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Navigation />
      <Routes>
        <Route path="/" element={<Launches />} />
        <Route path="/favorites/" element={<Favorites />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Container>
  );
};

export default App;
