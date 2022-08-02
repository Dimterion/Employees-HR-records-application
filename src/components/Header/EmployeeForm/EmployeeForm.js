import { useContext, useState } from "react";
import { Context } from "../../../utils/Context";
import Select from "react-select";
import "./employeeForm.css";
import { states, departments } from "../../../assets/dropdownLists";

function EmployeeForm() {
  const initialState = {
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    state: null,
    zipCode: 0,
    department: "",
  };

  const [formData, setFormData] = useState(initialState);
  const { contextData, setContextData } = useContext(Context);

  const statesDropdown = states.map((state, index) => {
    return {
      label: state.name,
      value: state.name,
      name: "state",
      key: index,
    };
  });

  const departmentsDropdown = departments.map((department, index) => {
    return {
      label: department.name,
      value: department.name,
      name: "department",
      key: index,
    };
  });

  function inputChange(e) {
    const { name, value } = e.target || e;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function createEmployee(e) {
    e.preventDefault();
    setContextData([...contextData, formData]);
    setFormData(initialState);
  }

  return (
    <form className="employeeForm-container">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={inputChange}
        value={formData.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={inputChange}
        value={formData.lastName}
      />
      <label htmlFor="birthDate">Date of Birth</label>
      <input
        type="date"
        id="birthDate"
        name="birthDate"
        onChange={inputChange}
        value={formData.birthDate}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        onChange={inputChange}
        value={formData.startDate}
      />
      <fieldset className="employeeForm-container">
        <legend>Address</legend>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          onChange={inputChange}
          value={formData.street}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={inputChange}
          value={formData.city}
        />
        <label htmlFor="state">State</label>
        <Select
          id="state"
          name="state"
          onChange={inputChange}
          value={statesDropdown.filter((item) => {
            return item.value === formData.state;
          })}
          options={statesDropdown}
        />
        <label htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          type="number"
          name="zipCode"
          onChange={inputChange}
          value={formData.zipCode}
        />
      </fieldset>
      <label htmlFor="department">Department</label>
      <Select
        id="department"
        name="department"
        onChange={inputChange}
        value={departmentsDropdown.filter((item) => {
          return (item.value = formData.department);
        })}
        options={departmentsDropdown}
      />
      <button type="submit" onClick={createEmployee}>
        Save
      </button>
    </form>
  );
}

export default EmployeeForm;
