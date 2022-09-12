import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectRouts = () => {
  const user = useSelector((state:any) => state.user)

  return (
    <>
      {user ? <Outlet /> : <Navigate to="/" replace/>}
    </>
  )
}

export default ProtectRouts;