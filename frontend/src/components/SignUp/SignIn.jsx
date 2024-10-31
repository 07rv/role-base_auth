import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const SignIn = () => {
  const [loginTab, setLogintab] = useState("login");
  return loginTab === "login" ? (
    <Login setLogintab={setLogintab} />
  ) : (
    <Register setLogintab={setLogintab} />
  );
};

export default SignIn;
