import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  // 1. Add the global authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Helper functions to keep the JSX clean
  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Router>
        
       
        <Navbar openLogin={openLogin} isLoggedIn={isLoggedIn} />

        <Routes>
         
          <Route 
            path="/" 
            element={<Home isLoggedIn={isLoggedIn} openLogin={openLogin} />} 
          />
          
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>

        <Footer />

       
        <Login 
          isOpen={showLogin} 
          onClose={closeLogin} 
          setIsLoggedIn={setIsLoggedIn} 
        />
        
      </Router>
    </div>
  );
}

export default App;