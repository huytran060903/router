import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedFromUser = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "user") {
      navigate("/inspections", {
        replace: true,
      });
    }
  }, [user, navigate]);

  return <Outlet />;
};

export default ProtectedFromUser;
