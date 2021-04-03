import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import fire from "firebase";
import { useHistory } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const history = useHistory();
  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <AppBar position="fixed">
          <Toolbar className="navbar">
            <Typography variant="h6">
              <span className="head">Dashboard</span>
            </Typography>
            <Typography variant="h6">
              <NavLink
                exact
                to="/"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Home
              </NavLink>
              <NavLink
                to="/Create"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Create
              </NavLink>
              <NavLink
                to="/Update"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Update
              </NavLink>
              <NavLink
                to="/Delete"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Delete
              </NavLink>
              <Button
                onClick={handleLogout}
                style={{
                  marginLeft: "40px",
                  paddingLeft: "50px",
                  fontWeight: "bolder",
                  paddingRight: "50px",
                }}
              >
                Logout
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default Navbar;
