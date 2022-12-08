import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";

function App() {
  const Root = styled("div")(({ theme }) => ({
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  }));

  return (
    <Router>
      <Root>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </Root>
    </Router>
  );
}

export default App;
