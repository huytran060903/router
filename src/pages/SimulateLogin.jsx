import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const SimulateLogin = () => {
  const { setUser, isLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLoginWithRole = (role) => {
    setUser({ id: 1, name: "Huy", role });
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/", { replace: true });
    }
  }, [isLogin, navigate]);

  return (
    <>
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="font-medium text-red-500 text-2xl">Simulate Login</h1>

        <button
          className="px-1 py-2 bg-green-500 rounded-lg text-white cursor-pointer"
          onClick={() => {
            handleLoginWithRole("user");
          }}
        >
          Login as user
        </button>
        <button
          className="px-1 py-2 bg-green-500 rounded-lg text-white cursor-pointer"
          onClick={() => {
            handleLoginWithRole("manager");
          }}
        >
          Login as manager
        </button>
        <button
          className="px-1 py-2 bg-green-500 rounded-lg text-white cursor-pointer"
          onClick={() => {
            handleLoginWithRole("admin");
          }}
        >
          Login as admin
        </button>
      </div>
    </>
  );
};

export default SimulateLogin;
