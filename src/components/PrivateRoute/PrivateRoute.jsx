import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../store/user/selectors";


export default function PrivateRoute({children}) {
 const user = useSelector(userSelector)
 const navigate = useNavigate()
 useEffect(()=>{
     if(user?.role !== "admin"){
         navigate("/courses")
     }
 }, [user])


return <>{children}</>

}