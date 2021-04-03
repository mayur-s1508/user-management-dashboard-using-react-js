import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
const PageNotFound = () => {
  return <div>Page not found</div>;
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <PrivateRoute />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
