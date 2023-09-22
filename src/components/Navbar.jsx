import { Link, useNavigate } from "react-router-dom";
// import Login from "./../pages/registration/Login";
const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("user");
    navigate("/login");
  };
  return (
    <div className="main lg:flex md:flex flex-wrap justify-between items-center px-24 bg-gray-800 text-white py-4 shadow-md">
      <div className="left">
        <div className="logo font-bold text-3xl text-center">Shoppy</div>
      </div>
      <div className="right">
        <ul className="flex space-x-4 justify-center items-center">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          {user && (
            <li className="cursor-pointer" onClick={logout}>
              Logout
            </li>
          )}
          {/* <Link to={"/login"}>
            <li className="cursor-pointer">Login</li>
          </Link>
          <Link to={"/signup"}>
            <li className="cursor-pointer">Signup</li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
