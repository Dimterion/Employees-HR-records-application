import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import Error from "./pages/Error/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="employee-list" element={<EmployeeList />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
