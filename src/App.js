import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
import { Context } from "./utils/Context";
import Home from "./pages/Home/Home";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";

function App() {
  const [contextData, setContextData] = useState([]);
  const value = useMemo(() => ({ contextData, setContextData }), [contextData]);

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="employee-list" element={<EmployeeList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
