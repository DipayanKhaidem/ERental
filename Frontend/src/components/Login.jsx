import {Link} from "react-router-dom";

export default function Login({isOpen, onClose}) 
{ 
  if(!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-lg">
    <div className="relative">

      <button onClick={onClose}
       className="btn btn-sm btn-circle absolute right-2 top-2">X</button>
    <form className="fieldset bg-white border-blue-400  rounded-box w-xs border p-4">
      <fieldset className="fieldset">
        <label className="label text-blue-500 font-bold" >EMAIL</label>
        <input type="email" className="input validator" placeholder="Email" required />
        <p className="validator-hint hidden">Required</p>
      </fieldset>

      <label className="fieldset">
        <span className="label text-blue-500 font-bold">PASSWORD</span>
        <input type="password" className="input validator" placeholder="Password" required />
        <span className="validator-hint hidden">Required</span>
      </label>

      <button className="btn bg-blue-400 mt-4" type="submit">Login</button>
      <p className="text-sm text-center mt-3 text-blue-300">Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 font-semibold hover:underline" onClick={onClose}>Signup</Link>
      </p>


    </form>
    </div>
    </div>
  );
}
