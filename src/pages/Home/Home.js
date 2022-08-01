import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="homePage-container">
      <h1>HRnet</h1>
      <Link to="./employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
    </div>
  );
}

export default Home;
