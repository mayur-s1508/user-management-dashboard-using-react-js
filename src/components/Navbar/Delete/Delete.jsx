import React, { useState } from "react";
import "../navlink.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextField, Button, Paper } from "@material-ui/core";
import { deleteUsers } from "../../../redux/action";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../services/usersData";
const Delete = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    userId: "",
    apiKey: "",
  });
  function eventHandler(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }
  function del() {
    deleteUser(user.userId, user.apiKey).then((result) => {
      console.log(result);
    });
    dispatch(deleteUsers({ ...user, id: user.userId }));
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
            onClick={del}
            startIcon={<DeleteIcon />}
          >
            Delete
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
export default Delete;
