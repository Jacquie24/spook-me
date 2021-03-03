import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddSighting from "./Containers/AddSighting/AddSighting";
import AddUser from "./Containers/AddUser/AddUser";
import AllSightings from "./Containers/AllSightings/AllSightings";
import Login from "./Containers/Login/Login";
import NavBar from "./Components/NavBar/NavBar";
import AllUsers from "./Containers/AllUsers/AllUsers";
import EditSighting from "./Containers/EditSighting/EditSighting";
import Home from "./Containers/Home/Home";
import SingleSighting from "./Containers/SingleSighting/SingleSighting";
import SingleUser from "./Containers/SingleUser/SingleUser";
import "./App.css";

function App() {
  const [id, setId] = useState("");

  return (
    <div className="App">
      <Router>
        <NavBar id={id} setId={setId}/>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/sightings" component={AllSightings} />
          <Route exact path="/sightings/new" component={AddSighting} />
          <Route exact path="/sightings/:id" component={SingleSighting} />
          <Route exact path="/sightings/:id/edit" component={EditSighting} />
          <Route
            exact
            path="/login"
            component={() => <Login id={id} setId={setId} />}
          />
          <Route exact path="/users" component={AllUsers} />
          <Route exact path="/users/new" component={AddUser} />
          <Route exact path="/users/:id" component={SingleUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
