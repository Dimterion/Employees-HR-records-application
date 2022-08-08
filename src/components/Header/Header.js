import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return (
      <header className="header">
        <h1>HRnet</h1>
        <Link to="./employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
      </header>
    );
  } else if (pathname === "/employee-list") {
    return (
      <header className="header">
        <h1>Current Employees</h1>
      </header>
    );
  }
}

export default Header;
