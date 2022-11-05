import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import LocationView from "./LocationView";
import LeaveView from "./LeaveView";
import Location from "./Location";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/locationView" component={LocationView} />
        <Route exact path="/leaveView" component={LeaveView} />
        <Route exact path="/" component={Location} />
      </Switch>
    </BrowserRouter>
  );
}