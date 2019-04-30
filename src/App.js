import React from "react";
import "./App.css";

const App = () => {
  return (
    <div id="page">
      <header className="header">
        <a className="link-site" href="#page">
          Adam Guinea
        </a>
        <div className="nav">
          <ul>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#life">Life</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <section className="section">
          <div className="container">
            <div className="content content-100">
              <div className="content-right">
                <h1 className="text-uppercase no-margin">Adam Guinea</h1>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default App;
