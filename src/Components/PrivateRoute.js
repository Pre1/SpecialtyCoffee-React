import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import * as actionCreators from "../store/actions";

class PrivateRoute extends Component {
  async componentDidMount() {
    console.log("TCL: PrivateRoute => componentDidMount");

    await this.props.checkForExpiredToken();
  }

  render() {
    const { component: Component, user, ...rest } = this.props;
    console.log("TCL: PrivateRoute -> render -> user", user);

    return (
      <Route
        {...rest}
        render={props =>
          user ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.profileReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
