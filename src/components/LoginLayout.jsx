import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LoginLayout = () => {
  const { isLogin } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLogin);
    if (isLogin) {
      navigate("/", { replace: true });
    }
  }, [isLogin, navigate]);

  return <Outlet />;
};

export default LoginLayout;
