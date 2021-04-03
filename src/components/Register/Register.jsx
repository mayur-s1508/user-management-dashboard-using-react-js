import { Paper, TextField, Button, CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [progress, setProgress] = useState(false);
  const handleSingup = () => {
    if (password !== confirmPassword) {
      alert("Password and confirm password does not match");
      return;
    } else {
      setProgress(true);
      clearError();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => setProgress(false))
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
            default:
          }
        });
      <NavLink to="/Login" />;
    }
  };
  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };
  if (progress) {
    return (
      <div style={progressStyle}>
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
        <TextField
          type="password"
          label="Confirm password"
          value={confirmPassword}
          onChange={(event) => setconfirmPassword(event.target.value)}
        />
        <br />
        <br />
        <>
          <Button onClick={handleSingup} color="primary" variant="contained">
            {" "}
            Sign Up
          </Button>
          <p>
            Alredy have an account?{" "}
            <span style={{ cursor: "pointer" }}>
              <NavLink to="/Login">Sign in</NavLink>
            </span>
          </p>
        </>
      </div>
    </Paper>
  );
};
export default Register;
