import AddProduct from "./components/AddProduct.js";
import Display from "./components/Display.js";
import Demo from "./components/Demo.js";
import Header from "./components/Header.js";
import { useState } from "react";
import Login from "./components/Login.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import NewUser from "./components/NewUser.js";
import RegistedUser from "./components/RegistedUser.js";
import API from "./API"; // ✅ Import correctly
import { fetchData } from "./API";

function App() {
  var arr = [
    { prodName: "marker", prodPrice: 100 },
    { prodName: "colors", prodPrice: 500 },
  ];

  let [products, setProducts] = useState(arr);
  const [flag, setFlag] = useState(false);

  function funClick() {
    setFlag(!flag);
    console.log("clicked!!", flag);
  }

  function funGet(obj) {
    console.log(obj);
    setProducts([...products, obj]);
  }

  function funUpObj(newObj) {
    var newArr = products.map((x) => {
      if (x.prodName === newObj.prodName) {
        x.prodPrice = newObj.prodPrice;
      }
      return x;
    });
    setProducts(newArr);
  }

  function funRemoveObj(obj) {
    var newArr = products.filter((x) => x.prodName !== obj.prodName);
    setProducts(newArr);
  }
  function fetchData() {
    console.log("Fetching data...");
  }

  return (
    <div>
      <h1>Hello First</h1>
      <Display
        data={products}
        getUpObj={funUpObj}
        getRemoveObj={funRemoveObj}
      />
      <input type="button" value="Add Product" onClick={funClick}></input>
      {flag && <AddProduct getProduct={funGet} />}
      <br />
      <hr />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Display
              data={products}
              getUpObj={funUpObj}
              getRemoveObj={funRemoveObj}
            />
          }
        />
        <Route path="/*" element={<Home />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/register" element={<RegistedUser />} />
      </Routes>
      <hr />
      <br />
      <Demo />
      <hr />
      <API /> {/* ✅ Use this only if API.js is a React component */}
    </div>
  );
}

export default App;
