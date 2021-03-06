import { Link } from "react-router-dom";
import "../../css/Profile.css"
function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/profile/AccountPage" style={{ color: "black" }}>
          <button className="btn">Account Page</button>
        </Link>
        <Link to="/profile/TransferPage" style={{ color: "black" }}>
          <button className="btn">Transfer Page</button>
        </Link>
        <Link to="/profile/DepositPage" style={{ color: "black" }}>
          <button className="btn">Deposit Page</button>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
