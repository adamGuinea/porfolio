import React from "react";
import M from "materialize-css";
import "./App.scss";
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
                  <h2 className='sub-header'>
                    <span
                      className='delay'>
                      Roughly ~80%
                    </span>{" "}
                    Front End Developer.
                    <br />
                    <slider>
                      <h2 className="word-slider">
                        &nbsp;
                        <span className="word-slider__words">
                          <span>JavaScript</span>
                          <span>CSS</span>
                          <span>AWS</span>
                          <span>NoSQL</span>
                          <span>TypeScript</span>
                          <span>GraphQL</span>
                          <span>JavaScript</span>
                        </span>
                        {" "}
                        <span className="ml1">Enthusiast.</span>

                      </h2>
                    </slider>
                    <br />
                    <span className="show-sm">JavaScript Enthusiast</span>
                  </h2>
                  <div className="text-news">
                    <p>
                      Currently working on: {""}
                      <a
                        href="https://traveljobs.herokuapp.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        travelJobs, a social hub for expatriates
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
                      <div className="collapsible-header">TravelJobs </div>
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
                                href="https://github.com/adamGuinea/traveljobs"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                TravelJobs
                              </a>
                            </p>
                            <p>
                              Website: {""}
                              <a
                                href="https://traveljobs.herokuapp.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                travelJobs
                              </a>
                            </p>
                            {this.state.hover ? (
                              <picture>
                                <source
                                  media={{ maxWidth: 11 }}
                                  srcSet="/traveljobs.png"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/traveljobs.png"
                                />
                                <img
                                  className="materialboxed"
                                  width="650"
                                  src="/traveljobs.png"
                                  alt="traveljobs-profile"
                                />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              Social hub for working holiday makers. Guests can
                              browse through profiles without logging in and
                              once signed up can create their own profile which
                              details their experiences and education. Entering
                              a Github username into the profile form will
                              display your 5 most recent repositories. There is
                              a message board with like/unlike functionality and
                              a discussion section for every post.
                            </p>
                            <p>
                              The front-end uses SASS styling, React for
                              modularity and Redux to keep track of component
                              state. Unlike my other projects this app uses
                              solely functional components with the help of
                              React Hooks. The backend uses MongoDB and Express
                              along with Express-Validator for server-side form
                              validation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
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
                              A surveyor for email marketing campaigns in
                              NodeJS. My API uses Express routing and MongoDB
                              for data management. Authentication is handled by
                              Google and Webhooks communicate customer feedback
                              to the user. Email credits can be bought using
                              Stripe. I also added a news feed which pulls top
                              headlines and marketing articles from newsapi.org.
                            </p>
                            <p>
                              The client side again uses React, because I love
                              it, and Redux for state management. SASS styling
                              makes it pretty. This app along with others
                              required an understanding of responsive design and
                              how the layers of a project come together through
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
                                  srcSet="/thelongwayhome.png"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/thelongwayhome.png"
                                />
                                <img
                                  className="materialboxed"
                                  width="650"
                                  src="/thelongwayhome.png"
                                  alt="index-page"
                                />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              JavaScript site written in NodeJS that allows
                              users to post information about their favorite
                              campsites. Google and Dark Sky's API provides
                              geolocation, weather data, and displays a map for
                              uploaded photos. Users can follow each other and
                              receive notifications about their friends activity
                              as well as rate and comment on posts with AJAX
                              requests. Sign in as 'Alex', password: user.
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
                              An online store using a React front-end and Apollo
                              Client to handle data queries. This store uses a
                              MySQL database with Prisma as the interface layer
                              for CRUD operations, as well as GraphQL Yoga to
                              send email and handle authentication logic.
                              Payment processing is handled with Stripe. Sign in
                              with user@gmail.com, password: user.
                            </p>
                            <p>
                              Once logged in users can upload items, make
                              purchases, view past orders and manage account
                              permissions. Getting this app through testing with
                              Jest and deployed required collaboration with
                              others and diving into previously unknown
                              technologies.
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
                              are accessible via the person's name as well as
                              the company they work for.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="collapsible-header">DeathRoadTours </div>
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
                                DeathRoadTours
                              </a>
                            </p>
                            <p>
                              Website: {""}
                              <a
                                href="https://deathroadtours.herokuapp.com"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                deathroadtours
                              </a>
                            </p>
                            {this.state.hover ? (
                              <picture>
                                <source
                                  media={{ maxWidth: 11 }}
                                  srcSet="/deathroadtours.png"
                                />
                                <source
                                  media={{ maxWidth: "20em" }}
                                  srcSet="/deathroadtours.png"
                                />
                                <img
                                  className="materialboxed"
                                  width="650"
                                  id="img"
                                  src="/deathroadtours.png"
                                  alt="chatta-feed"
                                />
                              </picture>
                            ) : null}
                          </div>
                          <div className="c-8">
                            <p>
                              Fictional tour site for a real-life trip I'd like
                              to do one day. Using a MERN stack with SASS
                              styling it's hosted on two different servers with
                              create-react-app powering the front-end and a Node
                              API handling authentication and token
                              authorization on the back-end. Choose a username
                              and avatar on signup, otherwise you can be an egg.
                              Sign in with user@gmail.com, password: user.
                            </p>
                            <p>
                              Once signed in you can post on a message board
                              where posts are displayed chronologically with
                              full CRUD operations.{" "}
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
                              Built using Amazon Web Services from what I
                              learned on{" "}
                              <a
                                href="https://serverless-stack.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Serverless Stack
                              </a>
                              . Cognito assists user signup and account
                              management and S3 handles file uploads and
                              storage. Notes and attachments are saved with
                              DynamoDB and CloudFront serves out the app. Route
                              53 was used for Domain registration and connecting
                              user requests to an S3 bucket. Security is
                              provided by AWS Certificate Manager and Stripe
                              takes care of billing. Currently working on
                              support for Facebook login.
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
                      JavaScript enthusiast lucky enough to call a hobby a job.
                      Current focus on Front End Development but always willing
                      to broaden my scope commercially with server-side
                      technologies like serverless and Node. A genuine interest
                      in the industry allows for rapid adaption to requirements
                      and a flexible, composed attitude jibes well with Agile
                      response to change and delivery on those ever-tightening
                      deadlines.
                    </p>
                    <p>
                      My passion for writing code started while I was a
                      mechanical maintenance engineer contracting at tech
                      companies across London. I found it so interesting that
                      I’ve decided to go through an intensive study period and
                      change my career to software development. My skill set
                      broadens with every new project.
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
                          <a href="/adamGuinea-CV-LOR.pdf" download>
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
