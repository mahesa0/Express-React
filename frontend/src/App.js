import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
