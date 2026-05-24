import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added for redirection

export default function SignUp() {
  const navigate = useNavigate();

  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [serverError, setServerError] = useState(""); 

  const hasNumber = /\d/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasLength = password.length >= 8;

  const passwordValid = hasNumber && hasLower && hasUpper && hasLength;

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success!", data.message);
        navigate("/"); 
      } else {
        setServerError(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Server error:", error);
      setServerError("Could not connect to server. Is the backend running?");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card card-side bg-base-100 shadow-xl shadow-blue-500 max-w-3xl">
        {/* Image */}
        <figure className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1571716846319-21f2bf095516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29uc29sZXN8ZW58MHx8MHx8fDA%3D"
            alt="Signup"
            className="object-cover h-full w-full"
          />
        </figure>

       
        <form onSubmit={handleSubmit} className="card-body w-1/2 flex flex-col gap-5">
          <h2 className="card-title text-2xl">Join our community today</h2>

         
          {serverError && (
            <div className="text-sm text-red-500 bg-red-100 p-2 rounded">
              {serverError}
            </div>
          )}

          
          <input
            type="text"
            className="input input-bordered"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

         
          <input
            type="email"
            className="input input-bordered"
            placeholder="mail@site.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          
          <div className="flex flex-col gap-1">
            <input
              type="password"
              className={`input input-bordered ${
                password && !passwordValid ? "input-error" : ""
              }`}
              placeholder="Password"
              required
              value={password}
              onFocus={() => setShowRules(true)}
              onBlur={() => passwordValid && setShowRules(false)}
              onChange={(e) => setPassword(e.target.value)}
            />

            {showRules && !passwordValid && (
              <div className="text-xs text-gray-400 space-y-1 mt-1">
                <p className={hasLength ? "text-green-400" : ""}>
                  {hasLength ? "✓" : "•"} Minimum 8 characters
                </p>
                <p className={hasNumber ? "text-green-400" : ""}>
                  {hasNumber ? "✓" : "•"} One number
                </p>
                <p className={hasLower ? "text-green-400" : ""}>
                  {hasLower ? "✓" : "•"} One lowercase letter
                </p>
                <p className={hasUpper ? "text-green-400" : ""}>
                  {hasUpper ? "✓" : "•"} One uppercase letter
                </p>
              </div>
            )}
          </div>

          
          <div className="flex flex-col gap-1">
            <input
              type="password"
              className={`input input-bordered ${
                confirmPassword && password !== confirmPassword
                  ? "input-error"
                  : ""
              }`}
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {confirmPassword && password !== confirmPassword && (
              <p className="text-xs text-red-400">Passwords do not match</p>
            )}
          </div>

          
          <div className="card-actions justify-end pt-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!passwordValid || password !== confirmPassword}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}