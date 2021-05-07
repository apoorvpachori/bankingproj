import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/profile/AccountPage" style={{ color: "black" }}>
          <p></p>Account Page
        </Link>
        <Link to="/profile/TransferPage" style={{ color: "black" }}>
          Transfer Page
        </Link>
        <Link to="/profile/DepositPage" style={{ color: "black" }}>
          Deposit Page
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
