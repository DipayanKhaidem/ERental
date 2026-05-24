import { Link } from "react-router-dom";
import { useState } from "react";

// 1. Added setIsLoggedIn to the props
export default function Login({ isOpen, onClose, setIsLoggedIn }) {
  // 2. Added state to track what the user types and any server errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState("");

  if (!isOpen) return null;

  // 3. The backend communication function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(""); // Clear out any old errors when they try again

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login Success!");
        localStorage.setItem("token", data.token); // Save the JWT
        setIsLoggedIn(true); // Update global Navbar state
        onClose(); // Close this modal (using your specific prop name)
      } else {
        // Show "Invalid credentials" or "User not found" errors
        setServerError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Server error:", error);
      setServerError("Could not connect to server.");
    }
  };

  return (
    // Added z-50 to ensure the modal always sits above your fixed Navbar!
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-lg z-50">
      <div className="relative">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
        >
          X
        </button>

        {/* 4. Attached handleSubmit to the form */}
        <form onSubmit={handleSubmit} className="fieldset bg-white border-blue-400 rounded-box w-xs border p-4 pt-8">
          
          {/* 5. Error Message Display (Only shows if the backend rejects the login) */}
          {serverError && (
            <div className="text-sm text-red-500 bg-red-50 p-2 rounded mb-2 border border-red-200">
              {serverError}
            </div>
          )}

          <fieldset className="fieldset">
            <label className="label text-blue-500 font-bold">EMAIL</label>
            <input
              type="email"
              className="input validator"
              placeholder="Email"
              required
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Update state on keystroke
            />
            <p className="validator-hint hidden">Required</p>
          </fieldset>

          <label className="fieldset mt-2">
            <span className="label text-blue-500 font-bold">PASSWORD</span>
            <input
              type="password"
              className="input validator"
              placeholder="Password"
              required
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)} // Update state on keystroke
            />
            <span className="validator-hint hidden">Required</span>
          </label>

          <button className="btn bg-blue-400 text-white mt-4 hover:bg-blue-500" type="submit">
            Login
          </button>
          
          <p className="text-sm text-center mt-3 text-blue-300">
            Don't have an account?{" "}
            <Link
              to="/SignUp"
              className="text-blue-500 font-semibold hover:underline"
              onClick={onClose}
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}