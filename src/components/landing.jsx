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
                  <h3>Cheap</h3>
                  <p className="lead mb-0">
                    TLorem ipsum is a pseudo-Latin text used in web design,
                    typography, layout
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-globe m-auto text-primary"></i>
                  </div>
                  <h3>Global</h3>
                  <p className="lead mb-0">
                    have been changed by addition or removal, so to deliberately
                    render its content nonsensical; it's not genuine, correct
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto text-primary"></i>
                  </div>
                  <h3>Easy</h3>
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
                <h2>123123123</h2>
                <p className="lead mb-0">
                  In a professional context it often happens that private or
                  corporate clients corder a publication to be made and
                  presented with the actual content still not being ready. Think
                  of a news blog that's filled with content hourly on the day of
                  going live.
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 text-white showcase-img showcase-img-2"></div>
              <div className="col-lg-6 my-auto showcase-text">
                <h2>234234234</h2>
                <p className="lead mb-0">
                  However, reviewers tend to be distracted by comprehensible
                  content, say, a random text copied from a newspaper or the
                  internet. The are likely to focus on the text, disregarding
                  the layout and its elements. Besides, random text risks to be
                  unintendedly humorous or offensive
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img showcase-img-3"></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Easy to Use &amp; Customize</h2>
                <p className="lead mb-0">
                  Most of its text is made up from sections 1.10.32–3 of
                  Cicero's De finibus bonorum et malorum (On the Boundaries of
                  Goods and Evils; finibus may also be translated as purposes).
                  Neque porro quisquam est qui dolorem ipsum
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
