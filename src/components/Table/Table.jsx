import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../redux/action";
import { getUsers } from "../../services/usersData";
import { useDispatch, useSelector } from "react-redux";
import {
  Table as Table1,
  TableRow as TableRow1,
  Button,
  TextField,
  TableBody,
  TableHead,
  TableCell,
  Paper,
} from "@material-ui/core";
function Table() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    getUsers().then((users) => {
      dispatch(fetchUsers(users));
    });
  }, [dispatch]);
  function refresh() {
    getUsers().then((users) => {
      dispatch(fetchUsers(users));
    });
  }
  function find() {
    getUsers().then((users) => {
      var arr = [];
      for (var i = 0; i < users.length; i++) {
        if (users[i].userCity === search || users[i].userState === search) {
          arr.push(users[i]);
        }
      }
      console.log(arr.length <= 0);
      if (arr.length <= 0) {
        alert("data not found");
        return;
      }
      dispatch(fetchUsers(arr));
    });
  } //table import as Table1 because of Component name is also Table and TableRow  imported as TableRow1 for same reason
  return (
    <Paper>
      <Table1 className="tableClass" style={{ marginTop: "60px" }}>
        <TableHead>
          <TableRow1 style={{ marginLeft: "500px!important" }}>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
              <Button onClick={refresh} color="primary" variant="contained">
                Refresh
              </Button>
            </TableCell>
            <TableCell>
              <TextField
                id="outlined-basic"
                className="btn1"
                style={{ marginLeft: "40px" }}
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                placeholder="       Search ..."
              />
            </TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                className="btnsearch"
                onClick={find}
              >
                search
              </Button>
            </TableCell>
          </TableRow1>
          <TableRow1>
            <TableCell>
              <b>UserID</b>
            </TableCell>
            <TableCell>
              <b>Name</b>
            </TableCell>
            <TableCell>
              <b>DOB</b>
            </TableCell>
            <TableCell>
              <b>Contact NO</b>
            </TableCell>
            <TableCell>
              <b>City</b>
            </TableCell>
            <TableCell>
              <b>State </b>
            </TableCell>
          </TableRow1>
        </TableHead>
        {state.users.map((val) => {
          var date;
          console.log(typeof val.userDob);
          if (!val.userDob._seconds) {
            date = val.userDob.toString();
          } else {
            date = new Date(val.userDob._seconds * 1000).toString();
          }
          return (
            <TableRow
              key={val.userId}
              userId={val.userId}
              firstName={val.userName.firstName}
              lastName={val.userName.lastName}
              primaryContact={val.userContacts[0]}
              alternateContact={val.userContacts[1]}
              userDob={date}
              userCity={val.userCity}
              userState={val.userState}
            />
          );
        })}
      </Table1>
    </Paper>
  );
}
const TableRow = (props) => {
  return (
    <TableBody>
      <TableRow1>
        <TableCell>{props.userId}</TableCell>
        <TableCell>
          {props.firstName} {props.lastName}
        </TableCell>
        <TableCell>{props.userDob}</TableCell>
        <TableCell>
          {props.primaryContact},{props.alternateContact}
        </TableCell>
        <TableCell>{props.userCity}</TableCell>
        <TableCell>{props.userState}</TableCell>
      </TableRow1>
    </TableBody>
  );
};

export default Table;
