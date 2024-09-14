import React, { Component } from "react";
import axios from "axios";
import "./style.scss";
import { formatDate, formatPrice } from "../Utils/Format";
import { useNavigate, useParams } from "react-router-dom";

export class ListProduct extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    let res = await axios.get("http://localhost:8080/api/product");
    console.log(">>> check data: ", res.data);
    this.setState({ products: res && res.data ? res.data : [] });
  }
  handleViewDetail = (product) => {
    console.log(">>> check props: ", this.props);
    this.props.navigate(`/product/${product.id}`); // Truyền tham số id sang trang chi tiết sản phẩm
  };

  render() {
    let { products } = this.state;
    return (
      <>
        <div>Fetch All Data Product</div>

        <table id="customers">
          <tr>
            <th>STT</th>
            <th>Name</th>
          </tr>
          {products && // products != null
            products.length > 0 && // products not is null Nếu không có phần tử nào, phần tử <tr> sẽ không được render.
            products.map((product, index) => {
              return (
                <tr
                  className="item-detail"
                  key={product.id}
                  onClick={() => this.handleViewDetail(product)}
                >
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                </tr>
              );
            })}
        </table>
      </>
    );
  }
}
function WithNavigate(props) {
  let navigate = useNavigate();

  return <ListProduct {...props} navigate={navigate} />;
}

export default WithNavigate;
