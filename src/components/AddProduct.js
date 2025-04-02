import { useState } from "react";

function AddProduct(props) {
  let [textName, setName] = useState("");
  let [textPrice, setPrice] = useState("");

  function nameChange(event) {
    setName(event.currentTarget.value);
  }

  function priceChange(event) {
    setPrice(event.currentTarget.value);
  }

  function funInSert() {
    var obj = { prodName: textName, prodPrice: textPrice };
    setName("");
    setPrice("");
    console.log(obj);
    props.getProduct(obj);
  }

  return (
    <div>
      <h3>New Product Details</h3>

      <div>
        Product Name:
        <input type="text" onChange={nameChange} value={textName}></input>
      </div>
      <div>
        Product Price:
        <input type="text" onChange={priceChange} value={textPrice}></input>
      </div>
      <div>
        Product Name:
        <input type="button" value="Insert" onClick={funInSert}></input>
      </div>
    </div>
  );
}

export default AddProduct;
