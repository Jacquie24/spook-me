import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddSighting from "./Containers/AddSighting/AddSighting";
// import AddUser from "./Containers/AddUser/AddUser";
import AllSightings from "./Containers/AllSightings/AllSightings";

import NavBar from "./Components/NavBar/NavBar";
// import AllUsers from "./Containers/AllUsers/AllUsers";
import EditSighting from "./Containers/EditSighting/EditSighting";
// import Home from "./Containers/Home/Home";
import SingleSighting from "./Containers/SingleSighting/SingleSighting";
import SingleUser from "./Containers/SingleUser/SingleUser";

function App() {

  return (
    <div className="App">

      <Router>
      <NavBar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/sightings" component={AllSightings} />
          <Route exact path="/sightings/new" component={AddSighting} />
          <Route exact path="/sightings/:id" component={SingleSighting} />
          <Route exact path="/sightings/new" component={AddSighting} />
          {/* <Route exact path="/sightings/:id" component={SingleSighting} /> */}
          <Route exact path="/sightings/:id/edit" component={EditSighting} />
          {/* <Route exact path="/users" component={AllUsers} /> */}
          {/* <Route exact path="/users/new" component={AddUser} /> */}
          <Route exact path="/users/:id" component={SingleUser} />
          

        </Switch>
      </Router>
}

export default App;
