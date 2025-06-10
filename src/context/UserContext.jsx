import React, { createContext } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({
  children,
  value = { id: 1, name: "Huy", role: "manager" },
}) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
