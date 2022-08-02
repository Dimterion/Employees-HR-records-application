import { Link } from "react-router-dom";
import "./employeeList.css";

function EmployeeList() {
  return (
    <div>
      <div>Employee list content</div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
