import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/profile/AccountPage">Account Page</Link>

        <Link to="/profile/TransferPage">Transfer Page</Link>

        <Link to="/profile/DepositPage">Deposite Page</Link>
      </ul>
    </nav>
  );
}

export default Nav;
