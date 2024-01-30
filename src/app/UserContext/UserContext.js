import React, { createContext, useContext, useEffect, useState, } from 'react';

const UserContext = createContext();
export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
