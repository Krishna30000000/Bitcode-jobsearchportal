import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Display All Products</Link>
        </li>
        
        <li>
          <Link>New User</Link>
        </li>
        <li>
          <Link>Registerd User</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
