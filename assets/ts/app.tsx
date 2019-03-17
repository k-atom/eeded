import "../css/app.scss";

// NPM module
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Page
import Header from "./components/header";

// JS
import loadScript from '../vendor/loadJS_module';

console.log('use tsx success');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Boring Login Page!</h1>
        <Link to="/">Home</Link>
        {loadScript('/js/needed/needed.js')}
      </div>
    )
  }
}

let mountNode = document.getElementById("k-browser");
ReactDOM.render(<App />, mountNode);