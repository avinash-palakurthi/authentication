import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signin = async () => {
    if (email === "" || password === "") {
      return alert("plese fill all the fields");
    }

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const users = localStorage.setItem("user", JSON.stringify(user));
      alert("signin successfull");
      navigate("/");
      setEmail("");
      setPassword("");
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-slate-950">
      <div className="bg-slate-800 px-20 py-20 rounded-xl">
        <div>
          <h1 className="text-center text-white text-xl mb-4 font-semibold">
            Login
          </h1>
        </div>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="email"
            className="bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="password"
            className="bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none "
          />
        </div>
        <div className="flex justify-center mb-3">
          <button
            className="bg-yellow-500 w-full text-black font-semibold px-2 py-2 rounded-lg"
            onClick={signin}
          >
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don&apos;t have an account ?
            <Link className=" text-yellow-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
