import { useState, Children } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";
import Userprofile from "../Components/Userprofile";
import "./App.css";
import AuthProvider from "./AuthProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/profile" element={<Userprofile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
