import React from "react";
import M from "materialize-css";
import "./App.css";

let hrefLink = "#";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTop: true, hover: false };
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

  componentDidUpdate() {
    M.AutoInit();
  }

  render() {
    return (
      <div id="page" className="scrollspy">
        <header className="header">
          <a className="link-site" href="#page">
            {this.state.isTop ? null : (
              <i className="tiny material-icons">brightness_1</i>
            )}
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
                  <h2 className="sub-header">
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
                        MailPlan, bulk email surveyor
                      </a>
                      .
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
                      <div className="collapsible-header">MailPlan </div>
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
                                  srcSet="/mailplan-dashboard.png"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/mailplan-dashboard.png"
                                />
                                <img
                                  className="materialboxed"
                                  width="650"
                                  src="/mailplan-dashboard.png"
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
                              to the user. The client side again uses React,
                              because I love it, and Redux for state management.
                            </p>
                            <p>
                              This app along with others required an
                              understanding of responsive design and how the
                              layers of a project come together through
                              effective architecture.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="collapsible-header">TheLongWayHome </div>
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
                                  srcSet="/tlwh-show-page.png"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/tlwh-show-page.png"
                                />
                                <img
                                  className="materialboxed"
                                  width="650"
                                  src="/tlwh-show-page.png"
                                  alt="index-page"
                                />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              JavaScript site written in Node JS that allows
                              users to post information about their favorite
                              campsites. Google and Dark Sky's API provides
                              geolocation, weather data, and displays a map for
                              uploaded photos. Users can follow each other and
                              receive notifications about their friends activity
                              as well as rate and comment on posts with AJAX
                              requests.
                            </p>
                            <p>
                              I love exploring new places, so once I got a
                              handle on databases and routing this was the first
                              significant app I built.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="collapsible-header">Stellahart </div>
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
                                <img
                                  className="materialboxed"
                                  width="650"
                                  src="/stellahart.png"
                                  alt="store-page"
                                />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              An online store using a React front end and Apollo
                              Client to handle data caching. This store uses a
                              MySQL database with Prisma as the interface layer
                              for CRUD operations, as well as GraphQL Yoga to
                              send email and handle authentication logic.
                              Payment processing is handled with Stripe.
                            </p>
                            <p>
                              Getting this app through testing with Jest and
                              deployed required collaboration with others and
                              diving into previously unknown technologies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="collapsible-header">
                        CRM
                        <em className="label">mobile</em>
                      </div>
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
                                href="https://github.com/adamGuinea/CRM"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                CRM
                              </a>
                            </p>
                            {this.state.hover ? (
                              <picture>
                                <source
                                  media={{ maxWidth: 11 }}
                                  srcSet="/CRM-screenshot.png"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/CRM-screenshot.png"
                                />
                                <img
                                  className="materialboxed"
                                  width="650"
                                  id="img"
                                  src="/CRM-screenshot.png"
                                  alt="chatta-feed"
                                />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              I liked the idea of building a mobile app without
                              having to learn a completely new language so I
                              wrote a CRM tool for my online store in
                              react-native. Firebase made handling login and
                              read/write permissions <em>relatively</em> easy.
                            </p>
                            <p>
                              A user can store information about friends or
                              customers where click through calls, email, and
                              SMS make it easy to get in touch. Contact details
                              are accessible by person name as well as the
                              company they work for.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="collapsible-header">Chatta </div>
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
                                <img
                                  className="materialboxed"
                                  width="650"
                                  id="img"
                                  src="/chatta-feed.png"
                                  alt="chatta-feed"
                                />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              Message board using a MERN stack. Hosted on two
                              different servers with create-react-app powering
                              the front end and a Node API handling
                              authentication and token authorization on the back
                              end. Users can choose an avatar on signup and
                              posts are displayed chronologically with full CRUD
                              operations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span className="collapsible-header">
                        Latenotes
                        <em className="label">aws</em>
                      </span>
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
                                href="https://github.com/adamGuinea/serverless-client"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Client
                              </a>
                              ,{" "}
                              <a
                                href="https://github.com/adamGuinea/serverless"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                API
                              </a>
                            </p>
                            <p>
                              Website: {""}
                              <a
                                href="https://latenotes.com"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                www.latenotes.com
                              </a>
                            </p>
                            {this.state.hover ? (
                              <picture>
                                <source
                                  media={{ maxWidth: 11 }}
                                  srcSet="/latenotes.jpg"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/latenotes.jpg"
                                />
                                <img
                                  className="materialboxed"
                                  width="650"
                                  id="img"
                                  src="/latenotes.jpg"
                                  alt="latenotes"
                                />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              Built using Amazon Web Services from a course by{" "}
                              <a
                                href="https://serverless-stack.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Serverless Stack
                              </a>
                              . Cognito assists user signup and account
                              management and S3 handles file uploads and
                              storage. Notes and attachments are saved to a
                              DynamoDB database and Cloudfront serves out the
                              app. Route 53 was used for Domain registration and
                              connecting user requests to an S3 bucket. Security
                              is provided by AWS Certificate Manager.
                            </p>
                            <p>
                              This was my first time using Lambda's event driven
                              approach to running databases combined with Amazon
                              API Gateway for restful routing. Super excited to
                              learn more about it.
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
                      My passion for writing code started while I was a
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
                        srcSet="/petra-profile.jpg"
                      />
                      <source
                        media={{
                          maxWidth: "48em"
                        }}
                        srcSet="/petra-profile.jpg"
                      />
                      <img src="/petra-profile.jpg" alt="profile-pic" />
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
                        Shoot me an email! or download my CV{" "}
                        <em>
                          <a href="/adamGuineaCV.pdf" download>
                            here
                          </a>
                        </em>
                        .
                      </p>
                      <p>
                        A genuine love of coding and a willingness to pick up
                        new technologies is what I could bring to your next
                        project.
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
