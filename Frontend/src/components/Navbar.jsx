import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 

export default function Navbar({ openLogin,isLoggedIn, setIsLoggedIn }) {

  
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch]=useState(false);
  const [searchQuery, setSearchQuery]=useState("");

  const navigate=useNavigate();

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout=()=>{
    localStorage.removeItem("item");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    if(searchQuery.trim()){
      console.log("User is searching for:", searchQuery);
      setSearchQuery(""); // Clear the search input after submission
      setShowSearch(false); 
    }
  };

  return (
    <nav
      className={`navbar fixed z-50 transition-all duration-300 border-b shadow-sm ${
        isScrolled
          ? "bg-white border-transparent"
          : "bg-white/20 backdrop-blur-md border-white/30"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-blue-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 text-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-extrabold text-white"
          >
            {/* 5. Conditional Rendering for Login/Logout */}
            {isLoggedIn ? (
              <li>
                <button onClick={handleLogout} className="text-red-400 hover:text-red-300">
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <button onClick={openLogin}>Login</button>
              </li>
            )}
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#featuredDevices">Featured Devices</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/">
          <span className="text-xl sm:text-xl md:text-2xl font-medium flex items-center hover:opacity-80 transition-opacity">
            <span
              className={`transition-colors duration-300 ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}
            >
              E
            </span>
            <span className="text-blue-400">-Rental</span>
          </span>
        </Link>
      </div>

      <div className="navbar-end flex gap-1">
        {/* 6. Expanding Search Bar Logic */}
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          {showSearch && (
            <input
              type="text"
              placeholder="Search devices..."
              className={`input input-sm input-bordered w-32 md:w-48 transition-all duration-300 ${
                isScrolled ? "bg-white text-slate-800" : "bg-white/80 text-black"
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              onBlur={() => !searchQuery && setShowSearch(false)} // Closes if empty and clicked away
            />
          )}
          <button
            type="button"
            onClick={() => setShowSearch(!showSearch)}
            className="btn btn-ghost btn-circle text-blue-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>

        <button className="btn btn-ghost btn-circle text-blue-400 hover:text-white">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </nav>
  );
}