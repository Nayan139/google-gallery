import { Container } from "@mui/material";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Container
      maxWidth="lg"
      className="container"
      sx={{ bgcolor: "#cfe8fc", height: "fixed" }}
    >
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
