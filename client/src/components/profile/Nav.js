import TransferBtn from "./components/TransferBtn";
import DepositBtn from "./components/DepositBtn";
import AccountBtn from "./components/AccBtn";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/AccountPage">
          <li>
            <AccountBtn />
          </li>
        </Link>

        <Link to="/TransferPage">
          <li>
            <TransferBtn />
          </li>
        </Link>

        <Link to="/DepositPage">
          <li>
            <DepositBtn />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
