import React from "react";
import Table from "../Table/Table";
import Navbar from "../Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Create from "../Navbar/Create/Create";
import Update from "../Navbar/Update/Update";
import Delete from "../Navbar/Delete/Delete";
const Dashboard = () => {
  return (
    <>
      <div className="splitL">
        <Navbar />
        <Route path="/" component={Table} />
      </div>
      <div className="splitR">
        <Route exact path="/" component={Create} />
        <Switch>
          <Route path="/Create" component={Create} />
          <Route path="/Update" component={Update} />
          <Route path="/Delete" component={Delete} />
        </Switch>
      </div>
    </>
  );
};
export default Dashboard;
