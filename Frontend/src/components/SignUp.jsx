import { useState } from "react";

export default function SignUp() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showRules, setShowRules] = useState(false);

  const hasNumber = /\d/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasLength = password.length >= 8;

  const passwordValid = hasNumber && hasLower && hasUpper && hasLength;

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100">

      <div className="card card-side bg-base-100 shadow-xl shadow-white max-w-3xl">

        {/* Image */}
        <figure className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1571716846319-21f2bf095516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29uc29sZXN8ZW58MHx8MHx8fDA%3D"
            alt="Signup"
            className="object-cover h-full w-full"
          />
        </figure>

        <div className="card-body w-1/2 flex flex-col gap-5">

          <h2 className="card-title text-2xl">Join our community today</h2>

          {/* Username */}
          <input
            type="text"
            className="input input-bordered"
            placeholder="Username"
            required
          />

          {/* Email */}
          <input
            type="email"
            className="input input-bordered"
            placeholder="mail@site.com"
            required
          />

          {/* Password */}
          <div className="flex flex-col gap-1">

            <input
              type="password"
              className={`input input-bordered ${
                password && !passwordValid ? "input-error" : ""
              }`}
              placeholder="Password"
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

          {/* Confirm Password */}
          <div className="flex flex-col gap-1">

            <input
              type="password"
              className={`input input-bordered ${
                confirmPassword && password !== confirmPassword
                  ? "input-error"
                  : ""
              }`}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {confirmPassword && password !== confirmPassword && (
              <p className="text-xs text-red-400">
                Passwords do not match
              </p>
            )}

          </div>

          {/* Signup Button */}
          <div className="card-actions justify-end pt-2">
            <button
              className="btn btn-primary"
              disabled={!passwordValid || password !== confirmPassword}
            >
              Sign Up
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}