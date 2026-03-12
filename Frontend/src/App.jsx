import {  BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import {useState} from "react";
import Footer from "./components/Footer";
import Login from "./components/Login"
import SignUp  from "./components/SignUp";


function App() {

  const[showLogin,setShowLogin]=useState(false);

  return <div className="min-h-screen bg-white overflow-hidden">
    <Router>

      <Navbar openLogin={()=> setShowLogin(true)} />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/details" element={<DetailedPage />}/> */}
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>

        <Footer />

        <Login isOpen={showLogin} onClose={()=>setShowLogin(false)} />

       
    </Router>

  </div>
}

export default App
