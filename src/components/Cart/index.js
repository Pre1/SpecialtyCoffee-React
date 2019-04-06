import React, { Component } from "react";
import { connect } from "react-redux";
import orderProducts from "./orderProducts";

function mapStateToProps(state) {
  return {};
}

class Cart extends Component {
  render() {
    return (
      <div className="container col-8">
        <div className="container col-12">
          <div className="row col-md-10 col-md-offset-2 custyle">
            <table className="table table-striped custab">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Order Products</th>

                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tr>
                <td>1</td>
                <td>Blogs</td>
                <td>Parent Blogs</td>
                <td className="text-center">
                  <a className="btn btn-info btn-xs" href="#">
                    <span className="glyphicon glyphicon-edit" /> Detail
                  </a>{" "}
                  <a href="#" className="btn btn-danger btn-xs">
                    <span className="glyphicon glyphicon-remove" /> Delete
                  </a>
                </td>

                <orderProducts />
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
