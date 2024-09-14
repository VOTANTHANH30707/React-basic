import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate, formatPrice } from "../Utils/Format";
import axios from "axios";
import "./style.scss";

// Class component
export class DetailProduct extends Component {
  state = {
    product: [],
  };

  async componentDidMount() {
    let id = this.props.params.id;
    try {
      let res = await axios.get(`http://localhost:8080/api/product/${id}`);
      this.setState({ product: res && res.data ? res.data : [] });
    } catch (error) {
      console.error("Error fetching product data: ", error);
    }
  }

  handleBackBtn = () => {
    this.props.navigate("/product");
  };

  render() {
    let { product } = this.state;
    let isEmptyObj = Object.keys(product).length === 0;

    return (
      <>
        {!isEmptyObj && (
          <>
            <div>Product Details</div>
            <div>Product name: {product.name}</div>
            <div>Price: {formatPrice(product.price)}</div>
            <div>Create Day: {formatDate(product.createDate)}</div>

            <div>
              <img
                className="image"
                src={`../Product/Image/${product.img}`}
                alt={product.name}
              />
            </div>

            <div>
              <button type="button" onClick={this.handleBackBtn}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

// Functional wrapper to pass navigate and params as props
function WithNavigateWrapper(props) {
  let navigate = useNavigate();
  let params = useParams();
  return <DetailProduct {...props} navigate={navigate} params={params} />;
}

export default WithNavigateWrapper;
