import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, isLogin: !!user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
