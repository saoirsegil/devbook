import { createContext, useContext, useReducer } from "react";

// the actual value to access globally
export const UserContext = createContext();

export const UserProvider = ({ reducer, initialState, children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);

export const useStateValue = () => useContext(UserContext);
