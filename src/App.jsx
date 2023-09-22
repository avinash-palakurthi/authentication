import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import { ProtectRoute } from "./protectRoute/ProtectRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
