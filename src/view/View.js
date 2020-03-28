import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Footer from '../components/Footer/Footer'
import "./view.scss";
import About from "../pages/About";
import Activity from "../pages/Activity";
import Projects from "../pages/Projects";
import Competition from "../pages/Competition";
import { Route, Switch } from "react-router-dom";
const View = () => {
  return (
    <div className="view ">
      <Navbar screenSize={'mobile'}/>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/about" render={props => <About {...props} />} />
        <Route path="/activity" render={props=> <Activity {...props} />} />
        <Route path="/competition" render={props=> <Competition {...props} />} />
        <Route path="/projects" render={props => <Projects {...props} />} />
      </Switch>
      <Footer screenSize={'desktop'}/>
    </div>
  );
};

export default View;
