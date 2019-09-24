import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Landing;
