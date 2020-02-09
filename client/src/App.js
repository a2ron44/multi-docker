import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Fib Values v2</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
          <h2>Form</h2>
          <div>
            <Route exact path="/" component={Fib}></Route>
            <Route path="/otherpage" component={OtherPage}></Route>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
