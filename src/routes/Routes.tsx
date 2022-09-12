import { Route, Routes } from "react-router-dom"
import ProtectRouts from "../components/ProtectRoutes"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

const RoutesMain = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectRouts />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default RoutesMain;