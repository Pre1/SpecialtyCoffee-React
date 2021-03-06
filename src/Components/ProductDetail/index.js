import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";

// Components
import Loading from "../Loading";

class ProductDetail extends Component {
  state = {
    order: null,
    product: null,
    quantity: 1
  };

  componentDidMount = async () => {
    await this.props.getProduct(this.props.match.params.productID);
    if (this.props.userOrderStatusCart) {
      await this.setState({
        order: this.props.userOrderStatusCart.id,
        product: this.props.productInfo.id
      });
    }
  };

  quantityChange(e) {
    this.setState({ quantity: e.target.value });
  }

  render() {
    const { productInfo } = this.props;

    const addProduct = async () => {
      await this.props.addProductToCart(this.state);
    };

    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div className="row">
          <div className="col-3 mx-4">
            <div
              className="card my-4 align-items-center"
              style={{ height: "100%" }}
            >
              <img
                src={productInfo.image}
                className="card-img-top"
                alt={productInfo.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{productInfo.name}</h5>
                <p
                  className="card-text text-center"
                  style={{ color: "#a2a2a2" }}
                >
                  {productInfo.price} SR
                </p>
                <div className="row justify-content-md-center my-5">
                  <br />
                  <form>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Quantity*</span>
                      </div>
                      <input
                        type="number"
                        max="1000"
                        min="1"
                        placeholder="1"
                        className="form-control"
                        name="quantity"
                        onChange={this.quantityChange.bind(this)}
                      />
                    </div>
                    <Link
                      to={
                        this.state.quantity >= 1
                          ? "/products"
                          : `/products/${this.props.productInfo.id}`
                      }
                    >
                      <input
                        type="submit"
                        value="Add To Cart"
                        className="btn btn-light btn-block"
                        style={{ backgroundColor: "#fe687b", color: "#fff" }}
                        onClick={() => addProduct()}
                      />
                    </Link>{" "}
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 mx-4">
            <div
              className="card my-4 align-items-left"
              style={{ height: "100%" }}
            >
              <div className="card-body text-center">
                <h5 className="card-title my-5">{productInfo.description}</h5>
                <div className="row ">
                  <div className="col-4 text-center">
                    <span>Process: </span>
                    <span className="card-text" style={{ color: "#a2a2a2" }}>
                      {productInfo.process}
                    </span>
                  </div>
                  <div className="col-4 text-center">
                    <span>Flavor: </span>
                    <span className="card-text" style={{ color: "#a2a2a2" }}>
                      {productInfo.flavor}
                    </span>
                  </div>
                  <div className="col-4 text-center">
                    <span>Origin: </span>
                    <span className="card-text" style={{ color: "#a2a2a2" }}>
                      {productInfo.origin}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    productInfo: state.productsReducer.productInfo,
    loading: state.productsReducer.productInfoLoading,

    user: state.profileReducer.user,
    userLoading: state.profileReducer.userLoading,

    userOrderStatusCart: state.profileReducer.userOrderStatusCart,
    userOrderStatusCartLoading: state.profileReducer.userOrderStatusCartLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: prodID => dispatch(actionCreators.getProductDetail(prodID)),
    addProductToCart: product =>
      dispatch(actionCreators.addProductToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
