import React, { useState } from "react";
import { updateUsers } from "../../../redux/action";
import { updateUser } from "../../../services/usersData";
import { TextField, Button, Paper } from "@material-ui/core";
import "../navlink.css";
import { useDispatch } from "react-redux";
const Update = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    primaryContact: "",
    userDob: "",
    alternateContact: "",
    userCity: "",
    userState: "",
    apiKey: "",
  });
  function eventHandler(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }
  function update() {
    updateUser(user).then((res) => {
      console.log(res);
    });
    dispatch(updateUsers({ ...user }));
  }
  return (
    <div className="model">
      <Paper>
        <div className="formClass">
          <TextField
            label="Id"
            name="userId"
            onChange={eventHandler}
            value={user.userId}
            multiline
          />
          <TextField
            label="First Name"
            name="firstName"
            onChange={eventHandler}
            value={user.firstName}
            multiline
          />
          <TextField
            label="Last Name"
            name="lastName"
            onChange={eventHandler}
            value={user.lastName}
            multiline
          />
          <TextField
            label="Date of birth"
            name="userDob"
            type="date"
            onChange={eventHandler}
            value={user.userDob}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Contact No"
            name="primaryContact"
            onChange={eventHandler}
            value={user.primaryContact}
            multiline
          />
          <TextField
            label="Alternative Contact NO"
            name="alternateContact"
            onChange={eventHandler}
            value={user.alternateContact}
            multiline
          />
          <TextField
            label="City"
            name="userCity"
            onChange={eventHandler}
            value={user.userCity}
            multiline
          />
          <TextField
            label="State"
            name="userState"
            onChange={eventHandler}
            value={user.userState}
            multiline
          />
          <TextField
            label="Validation Key"
            name="apiKey"
            onChange={eventHandler}
            value={user.apiKey}
            multiline
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            style={{ marginLeft: "0px", marginTop: "20px" }}
            onClick={update}
          >
            Update
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={{ marginLeft: "15px", marginTop: "20px" }}
          >
            Cancel
          </Button>
        </div>
      </Paper>
    </div>
  );
};
export default Update;
