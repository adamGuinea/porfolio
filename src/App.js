import React from "react";
import M from "materialize-css";
import "./App.css";

let hrefLink = "#";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.mouseOver = this.mouseOver.bind(this);
    // this.mouseOut = this.mouseOut.bind(this);
    this.state = { isTop: true };
    this.state = { hover: false };
  }

  mouseOver = () => {
    this.setState({ hover: true });
  };
  mouseOut = () => {
    this.setState({ hover: false });
  };

  componentDidMount() {
    M.AutoInit();
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 200;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <div id="page" className="scrollspy">
        <header className="header">
          <a className="link-site scrollspy" href="#page">
            {this.state.isTop ? null : "Adam Guinea"}
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
            <a
              id="projects"
              className="anchor-content scrollspy"
              href={hrefLink}
            >
              &nbsp;
            </a>
            <div className="container">
              <div className="content">
                <div className="content-right">
                  <h1 className="text-uppercase">
                    Projects
                    <span>2018-2019</span>
                  </h1>
                </div>
                <div className="content-left">
                  <ul className="collapsible">
                    <li>
                      <div className="collapsible-header">Stellahart</div>
                      <div className="collapsible-body">
                        <div className="content-row">
                          <div
                            className="c-4"
                            onMouseEnter={this.mouseOver.bind(this)}
                            onMouseLeave={this.mouseOut.bind(this)}
                          >
                            <p>
                              Github: {""}
                              <a
                                href="https://github.com/adamGuinea/stellahart"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Stellahart
                              </a>
                            </p>
                            <p>
                              Website: {""}
                              <a
                                href="https://stellahart-next.herokuapp.com/items"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                stellahart-next
                              </a>
                            </p>
                            {this.state.hover ? (
                              <picture>
                                <source
                                  media={{ maxWidth: 11 }}
                                  srcSet="/stellahart.png"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/stellahart.png"
                                />
                                <img src="/stellahart.png" alt="store-page" />
                              </picture>
                            ) : null}
                          </div>
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
                      <div className="collapsible-header">TheLongWayHome</div>
                      <div className="collapsible-body">
                        <div className="content-row">
                          <div
                            className="c-4"
                            onMouseEnter={this.mouseOver.bind(this)}
                            onMouseLeave={this.mouseOut.bind(this)}
                          >
                            <p>
                              Github: {""}
                              <a
                                href="https://github.com/adamGuinea/thelongwayhome"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                thelongwayhome
                              </a>
                            </p>
                            <p>
                              Website: {""}
                              <a
                                href="https://thelongwayhome.herokuapp.com"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                thelongwayhome
                              </a>
                            </p>
                            {this.state.hover ? (
                              <picture>
                                <source
                                  media={{ maxWidth: 11 }}
                                  srcSet="/tlwh-index-page.png"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/tlwh-index-page.png"
                                />
                                <img
                                  src="/tlwh-index-page.png"
                                  alt="index-page"
                                />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              JavaScript site in Node JS that allows users to
                              rate and discuss their favorite campsites using
                              uploaded photos and geolocation for embedded maps.
                              This was my first introduction to Express routing
                              and data management with MongoDB.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="collapsible-header">MailPlan</div>
                      <div className="collapsible-body">
                        <div className="content-row">
                          <div
                            className="c-4"
                            onMouseEnter={this.mouseOver.bind(this)}
                            onMouseLeave={this.mouseOut.bind(this)}
                          >
                            <p>
                              Github: {""}
                              <a
                                href="https://github.com/adamGuinea/mailPlan"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                MailPlan
                              </a>
                            </p>
                            <p>
                              Website: {""}
                              <a
                                href="https://mailplan.herokuapp.com"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                mailplan
                              </a>
                            </p>
                            {this.state.hover ? (
                              <picture>
                                <source
                                  media={{ maxWidth: 11 }}
                                  srcSet="/mailplan-landing.png"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/mailplan-landing.png"
                                />
                                <img
                                  src="/mailplan-landing.png"
                                  alt="mailplan-landing"
                                />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              A surveyor for email marketing campaigns in Node
                              JS. My API uses Express routing and Mongo DB for
                              data management. Authentication is handled by
                              Google and Webhooks communicate customer feedback
                              to my users. The client side again uses React,
                              because I love it, and Redux for state management.
                              These apps along with others have improved my
                              understanding of responsive CSS design and how the
                              layers of a project come together through
                              effective architecture.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="collapsible-header">Chatta</div>
                      <div className="collapsible-body">
                        <div className="content-row">
                          <div
                            className="c-4"
                            onMouseEnter={this.mouseOver.bind(this)}
                            onMouseLeave={this.mouseOut.bind(this)}
                          >
                            <p>
                              Github: {""}
                              <a
                                href="https://github.com/adamGuinea/chatta"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Chatta
                              </a>
                            </p>
                            <p>
                              Website: {""}
                              <a
                                href="https://chatta-client.herokuapp.com"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                chatta-client
                              </a>
                            </p>
                            {this.state.hover ? (
                              <picture>
                                <source
                                  media={{ maxWidth: 11 }}
                                  srcSet="/chatta-feed.png"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/chatta-feed.png"
                                />
                                <img src="/chatta-feed.png" alt="chatta-feed" />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              A surveyor for email marketing campaigns in Node
                              JS. My API uses Express routing and Mongo DB for
                              data management. Authentication is handled by
                              Google and Webhooks communicate customer feedback
                              to my users. The client side again uses React,
                              because I love it, and Redux for state management.
                              These apps along with others have improved my
                              understanding of responsive CSS design and how the
                              layers of a project come together through
                              effective architecture.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <a id="life" href={hrefLink} className="anchor-content scrollspy">
              &nbsp;
            </a>
            <div className="container">
              <div className="content">
                <div className="content-right">
                  <h1 className="text-uppercase">
                    Life
                    <span>1991-2019</span>
                  </h1>
                </div>
                <div className="content-left">
                  <div className="content-text">
                    <p>
                      Developing slick user interfaces and acquiring new skills
                      along the way is exciting to me. I began learning software
                      development in late 2017 because I wanted to build
                      something of my own that was future orientated and easily
                      accessible. Since then I have been writing and deploying
                      my own apps privately and have been continually teaching
                      myself about it.
                    </p>
                    <p>
                      My passion for programming started while I was a
                      mechanical engineer contracting at tech companies across
                      London. I found it so interesting that I’ve decided to go
                      through an intensive study period and change my career to
                      software development. My skill set broadens with every new
                      project.
                    </p>
                  </div>
                  <figure className="p-1">
                    <picture>
                      <source
                        media={{ maxWidth: 22.5 }}
                        srcSet="/profile-pic.jpg"
                      />
                      <source
                        media={{ maxWidth: "48em" }}
                        srcSet="/profile-pic.jpg"
                      />
                      <img src="/profile-pic.jpg" alt="profile" />
                    </picture>
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <a
              id="contact"
              href={hrefLink}
              className="anchor-content scrollspy"
            >
              &nbsp;
            </a>
            <div className="container">
              <div className="content">
                <div className="content-right">
                  <h1 className="text-uppercase">Contact</h1>
                </div>
                <div className="content-left">
                  <div className="content-text">
                    <h2>
                      <a href="mailto:adamguinea22@gmail.com">
                        adamguinea22@gmail.com
                      </a>
                    </h2>
                  </div>
                </div>
                <div className="content-left p-1">
                  <div className="content-row details">
                    <div className="c-3">
                      <ul>
                        <li>
                          <a
                            href="https://linkedin.com/in/adamguinea"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/adamGuinea"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Github
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="c-6">
                      <p>
                        Curiosity, along with transferable experience from my
                        past career is what I could bring to your next project.
                        With my determination, passion for software development
                        and ability to adapt to new situations, I think I could
                        be a great new addition to your team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="profile-footer">
          <div className="container">
            <ul className="inline-list">
              <li>
                <i className="material-icons">copyright</i>
                2019
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
