import { Link } from "react-router-dom";
import "./employeeList.css";

function EmployeeList() {
  return (
    <div className="employeeListPage-container">
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
