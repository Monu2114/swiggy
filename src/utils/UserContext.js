import { createContext } from "react";

const Theme = createContext("dark");
const userInfo = createContext({
  loggedInUser: "Default User",
});

export { Theme, userInfo };
