import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/profile/AccountPage" className="link">
          <p></p>Account Page
        </Link>
        <Link to="/profile/TransferPage" className="link">
          Transfer Page
        </Link>
        <Link to="/profile/DepositPage" className="link">
          Deposit Page
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
