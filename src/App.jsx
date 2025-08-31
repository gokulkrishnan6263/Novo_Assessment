import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./Components/routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
