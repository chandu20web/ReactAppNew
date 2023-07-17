import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <nav>
      <Link to="/">
        <button type="button">Home</button>
      </Link>

      <Link to="/products">
        <button type="button">Products</button>
      </Link>

      <Link to="/cart">
        <button type="button">Cart</button>
      </Link>

      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Header;
