import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./Pages/Home";
import Navbar from "./Pages/Components/Navbar/Navbar";
import { useState } from "react";
import Package from "./Pages/Packages";

function App() {

  const [mode, setMode] = useState('light')
  
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar changeMode={setMode} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/package" element={<Package />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
