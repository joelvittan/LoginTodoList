import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const SecuredRoute = (props) => {
  const token = Cookies.get("jwt_token");
  const condition=(token===undefined)
  if(condition){
    console.log("Redirecting to login since no jwt token")
    
  }
  return condition?<Navigate to="/login"/>:<Outlet/>
};

export default SecuredRoute;