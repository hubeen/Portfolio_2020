import React from "react"
import Home from "../pages/Home";
import "./View.scss";
import { Route, Switch } from "react-router-dom";

const View = () => {
    return (
      <div className="view ">
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          
        </Switch>
      </div>
    );
  };
  
  export default View;