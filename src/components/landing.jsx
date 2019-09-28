import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/*Masthead */}
        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Hello from Cloud Computing</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form action="">
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      {" "}
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email..."
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <Link
                        className="btn btn-block btn-lg btn-primary"
                        to="/register"
                      >
                        Sign up!
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        {/*Icons Grid */}
        <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-plane m-auto text-primary"></i>
                  </div>
                  <h3>Fully Responsive</h3>
                  <p className="lead mb-0">
                    This theme will look great on any device, no matter the
                    size!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-globe m-auto text-primary"></i>
                  </div>
                  <h3>Bootstrap 4 Ready</h3>
                  <p className="lead mb-0">
                    Featuring the latest build of the new Bootstrap 4 framework!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto text-primary"></i>
                  </div>
                  <h3>Easy to Use</h3>
                  <p className="lead mb-0">
                    Ready to use with your own content, or customize the source
                    files!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Image Showcases */}
        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img showcase-img-1"></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Fully Responsive Design</h2>
                <p className="lead mb-0">
                  When you use a theme created by Start Bootstrap, you know that
                  the theme will look great on any device, whether it's a phone,
                  tablet, or desktop the page will behave responsively!
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 text-white showcase-img showcase-img-2"></div>
              <div className="col-lg-6 my-auto showcase-text">
                <h2>Updated For Bootstrap 4</h2>
                <p className="lead mb-0">
                  Newly improved, and full of great utility classes, Bootstrap 4
                  is leading the way in mobile responsive web development! All
                  of the themes on Start Bootstrap are now using Bootstrap 4!
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img showcase-img-3"></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Easy to Use &amp; Customize</h2>
                <p className="lead mb-0">
                  Landing Page is just HTML and CSS with a splash of SCSS for
                  users who demand some deeper customization options. Out of the
                  box, just add your content and images, and your new landing
                  page will be ready to go!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*Testimonials */}
        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="/img/testimonials-1.jpg"
                    alt=""
                  />
                  <h5>Margaret E.</h5>
                  <p className="font-weight-light mb-0">
                    "This is fantastic! Thanks so much guys!"
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="/img/testimonials-2.jpg"
                    alt=""
                  />
                  <h5>Fred S.</h5>
                  <p className="font-weight-light mb-0">
                    "Bootstrap is amazing. I've been using it to create lots of
                    super nice landing pages."
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="/img/testimonials-3.jpg"
                    alt=""
                  />
                  <h5>Sarah W.</h5>
                  <p className="font-weight-light mb-0">
                    "Thanks so much for making these free resources available to
                    us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Call to Action */}
        <section className="call-to-action text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form action="">
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      {" "}
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email..."
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <Link
                        className="btn btn-block btn-lg btn-primary"
                        to="/register"
                      >
                        Sign up!
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Landing;
