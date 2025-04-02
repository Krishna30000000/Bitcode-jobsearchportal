import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

function Login(props) {
  //uncontrolled form (DOM)

  let txtName = useRef();
  let txtPassword = useRef();
  function funLogin() {
    // console.log(txtName.current.value)
    console.log(txtName.current.value, txtPassword.current.value);
    var uName = txtName.current.value;
    var uPassword = txtPassword.current.value;

    Cookies.set(uName, uPassword, { expires: 3 });
  }

  //case 2
  var rowData = props.data;
  console.log(rowData);
  let [txtPName, setProdName] = useState();
  let [txtPPrice, setProdPrice] = useState();

  function funRead() {}

  function priceChange(event) {
    setProdPrice(event.currentTarget.value);
  }
  useEffect(() => {
    setProdName(rowData.prodName);
    setProdPrice(rowData.prodPrice);
  }, [props]);

  function funRemove() {
    var uname = txtName.current.value;
    Cookies.remove(uname);

    Cookies.get(uname);
  }

  function funRead() {
    var uname = txtName.current.value;
    var cookieValue = Cookies.get(uname);
  }

  return (
    <div>
      <h3>Login Form</h3>
      <div>
        UserName:
        <input type="text" ref={txtName} />
      </div>
      <div>
        Password:
        <input type="text" ref={txtPassword} />
      </div>
      <div>
        <input type="button" value="Login" onClick={funLogin} />
      </div>
      <hr />
      <h3>li data in the form</h3>
      <div>
        ProdName:
        <input type="text" value={txtPName} />
      </div>
      <div>
        ProdPrice:
        <input type="text" value={txtPPrice} onChange={priceChange} />
      </div>
      <div>
        <input type="button" value="LiData" onClick={funRead} />
      </div>
      <div>
        <input type="button" value="removeCookies" onClick={funRemove} />
      </div>

      <div>
        <input type="button" value="ReadCookies" onClick={funRead} />
      </div>
    </div>
  );
}
export default Login;
