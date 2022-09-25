import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import Hello from "./pages/Hello";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
