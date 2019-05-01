import React from "react";
import M from "materialize-css";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div id="page" className="scrollspy">
        <header className="header">
          <a className="link-site scrollspy" href="#page">
            Adam Guinea
          </a>
          <div className="nav">
            <ul>
              <li>
                <a href="#projects">Projects</a>
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
                  <h2 className="subheader">
                    Fitter turned Web Dev.
                    <br />
                    Learning every day.
                  </h2>
                  <div className="text-news">
                    <p>
                      Latest app: {""}
                      <a
                        href="https://mailplan.herokuapp.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        MailPlan, bulk email surveyor.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
        <main className="main">
          <section className="section">
            <div className="container">
              <div className="content">
                <div className="content-right">
                  <h1 className="text-uppercase">
                    Projects
                    <a id="projects" class="anchor-content scrollspy" href="" />
                    <span>2018-2019</span>
                  </h1>
                </div>
                <div className="content-left">
                  <ul class="collapsible">
                    <li>
                      <div class="collapsible-header">Stellahart</div>
                      <div class="collapsible-body">
                        <div className="projects-row">
                          {/* <div > */}
                          <img className="c-4" src="stellahart1.png" alt="" />
                          {/* </div> */}
                          <div className="c-8">
                            <p>
                              An online store using a React front-end and Apollo
                              Client to handle data caching. This store uses a
                              MySQL database with Prisma as the interface layer
                              for CRUD operations, as well as GraphQL Yoga to
                              send email and handle authentication logic.
                              Payment processing is handled with Stripe. Getting
                              this app through testing with Jest and deployed
                              required collaboration with others and diving into
                              previously unknown technologies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">TheLongWayHome</div>
                      <div class="collapsible-body">
                        <span>Lorem ipsum dolor sit amet.</span>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header">Chatta</div>
                      <div class="collapsible-body">
                        <span>Lorem ipsum dolor sit amet.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
