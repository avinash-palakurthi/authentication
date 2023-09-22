import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    if (email === "" || password === "") {
      return alert("Please fill all fields");
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      alert("signup successful");
      setEmail("");
      setPassword("");

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-slate-950 text-white">
      <div className="bg-slate-800 px-20 py-20 rounded-xl">
        <div>
          <h1 className="text-center text-xl mb-4 font-semibold">Signup</h1>
        </div>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:text-gray-200 outline-none"
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:text-gray-200 outline-none"
          />
        </div>

        <div className="flex justify-center mb-3">
          <button
            onClick={signup}
            className="bg-red-500 w-full font-semibold px-2 py-2 rounded-lg"
          >
            Signup
          </button>
        </div>
        <div>
          <h2>
            Do you have account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
