import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { UserProvider } from "./context/UserContext";
import reducer, { initialState } from "./reducer/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider initialState={initialState} reducer={reducer}>
      <App />
    </UserProvider>
  </React.StrictMode>
);
