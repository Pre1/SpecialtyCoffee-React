import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class orderProducts extends Component {
  render() {
    return (
      <div>
        <tr>
          <td>3</td>
          <td>Blogs</td>
          <td>Parent Blogs</td>
          <td className="text-center">
            <a className="btn btn-info btn-xs" href="#">
              <span className="glyphicon glyphicon-edit" /> Edit
            </a>{" "}
            <a href="#" className="btn btn-danger btn-xs">
              <span className="glyphicon glyphicon-remove" /> Del
            </a>
          </td>
        </tr>
      </div>
    );
  }
}

export default orderProducts;
