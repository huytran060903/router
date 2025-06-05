import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../main";

const ProtectedFromManager = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role === "manager") {
     navigate("/inspections", { replace: true });
    }
  });

  return <Outlet />;
};

export default ProtectedFromManager;
