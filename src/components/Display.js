import { useState } from "react";
import Card from "./Card";
import Login from "./Login";

function Display(props) {
  let products = props.data;
  function funRowClick(x, event) {
    let str = event.target.textContent;
    if (str === "Edit") {
      var newPrice = prompt("Enter the price:");
      if (newPrice) {
        var obj = { prodName: x.prodName, prodPrice: newPrice };
        props.getUpObj(obj);
      }
    } else if (str === "Delete") {
      var res = window.confirm("Do u want to Delete it?");
      if (res) {
        props.getRemoveObj(x);
      }
    }
  }
  let [cartFg, setCartFg] = useState(false);
  let [cartArr, setCart] = useState([]);

  function funCart(x) {
    setCartFg(true);
    setCart([...cartArr, x]);
  }
  //case 2
  let [liFlag, setLiFlag] = useState(false);
  let [rowData, setRowData] = useState();
  function funLi(obj) {
    console.log(obj);
    setLiFlag(true);
    setRowData(obj);
  }
  return (
    <div>
      <h4>Array Products</h4>
      <table border="2">
        <tr>
          <td>Name</td>
          <td>Price</td>t<td>Action</td>
          <td>Change</td>
        </tr>

        {products.map((x, i) => {
          return (
            <tr key={i}>
              <td>{x.prodName}</td>
              <td>{x.prodPrice}</td>
              <td
                onClick={(event) => {
                  event.preventDefault();
                  funRowClick(x, event);
                }}
              >
                <a href="">Edit</a>/<a href="">Delete</a>
              </td>
              <td>
                <input
                  type="button"
                  value="Add To Cart"
                  onClick={() => {
                    funCart(x);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </table>
      {cartFg && <Card arr={cartArr} />}
      <hr />
      <h4>Click li and display the contents in the form</h4>
      <ul>
        {products.map((x, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                funLi(x);
              }}
            >
              {x.prodName}*{x.prodPrice}
            </li>
          );
        })}
      </ul>
      {liFlag && <Login data={rowData} />}
    </div>
  );
}
export default Display;
