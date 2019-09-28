import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginFrom from "./components/loginForm";
import NavBar from "./components/navBar";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import auth from "./services/authService";
import NotFound from "./components/notFound";
import Landing from "./components/landing";
import ProtectedRoute from "./components/common/protectedRoute";
import ProfileForm from "./components/profileForm";
import Quote from "./components/quote";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />

        <Switch>
          <Route path="/login" component={LoginFrom} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/logout" component={Logout} />
          <ProtectedRoute path="/profile/:id" component={ProfileForm} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/quote" component={Quote} />
          <Route path="/" exact component={Landing} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
