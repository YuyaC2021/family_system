import { Outlet } from "react-router-dom";
// styling
import "./authLayout.scss";

const AuthLayout = () => {
  console.log("auth layout");

  return (
    <>
      <div className="d-flex flex-row flex-column justify-content-center align-items-center w-100  auth_container">
        <h3 className="text-center">河本家システム</h3>
        <Outlet/>
      </div>
    </>
  )
}

export default AuthLayout;