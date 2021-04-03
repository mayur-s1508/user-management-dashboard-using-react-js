import { TextField, Button, Paper, CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./loginForm.css";
import fire from "firebase/app";
import "firebase/auth";
const progressStyle = {
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};
const Login = () => {
  const history = useHistory();
  const [progress, setProgress] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleLogin = () => {
    setProgress(true);
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };
  React.useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        history.push("/");
      }
      setProgress(false);
    });
  }, [history]);
  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };
  console.log(progress);
  const clearInput = () => {
    setEmail("");
    setPassword("");
  };
  if (progress) {
    return (
      <div style={progressStyle}>
        {" "}
        <CircularProgress thickness={6} />
      </div>
    );
  }
  return (
    <Paper>
      <div className="logForm">
        <TextField
          type="text"
          value={email}
          label="Username"
          onChange={(event) => setEmail(event.target.value)}
        />
        <p>{emailError}</p>
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p>{passwordError}</p>
        <>
          <Button onClick={handleLogin} color="primary" variant="contained">
            Sign in
          </Button>
          <p>
            Don't have an account ?{" "}
            <span style={{ cursor: "pointer", topMargin: "20px" }}>
              <NavLink to="/Register">Sign Up</NavLink>
            </span>{" "}
          </p>
        </>
      </div>
    </Paper>
  );
};
export default Login;
