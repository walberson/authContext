import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import { Profile } from "./Profile";

function App() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <h1>Você está logado</h1>
          <button onClick={() => setIsAuthenticated(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Você não está logado</h1>
          <button onClick={() => setIsAuthenticated(true)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
