import { useContext, useState } from "react";
import { Context } from "../../utils/Context";
import Select from "react-select";
import "./employeeForm.css";
import { states, departments } from "../../assets/dropdownLists";
import ModalPlugin from "employee-hr-records-application-modal-plugin";

function EmployeeForm() {
  // Additional styling variable for the form dropdown menus
  const dropdownStyle = {
    control: (base) => ({
      ...base,
      border: "1px solid #000",
      boxShadow: "none",
      cursor: "pointer",
      "&:hover": {
        border: "1px solid #000",
        boxShadow: "1px 1px 1px #000",
      },
    }),
  };

  // Setting the initial state of the form
  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  // useState and useContext to manipulate the form data, context and opening/closing the modal
  const [formData, setFormData] = useState(initialState);
  const [openModal, setOpenModal] = useState(false);
  const { contextData, setContextData } = useContext(Context);

  // Mapping through the states array to store each one in the dropdown
  const statesDropdown = states.map((state, index) => {
    return {
      label: state.name,
      value: state.abbreviation,
      name: "state",
      key: index,
    };
  });

  // Mapping through the departments array to store each one in the dropdown
  const departmentsDropdown = departments.map((department, index) => {
    return {
      label: department.name,
      value: department.name,
      name: "department",
      key: index,
    };
  });

  // Function to handle the input changes of the form fields
  function inputChange(e) {
    const { name, value } = e.target || e;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  // Function to handle the form submission
  function createEmployee(e) {
    e.preventDefault();
    setContextData([...contextData, formData]);
    setOpenModal(true);
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
      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        onChange={inputChange}
        value={formData.dateOfBirth}
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
          styles={dropdownStyle}
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
      {/* Using Select for the dropdown menus */}
      <Select
        styles={dropdownStyle}
        id="department"
        name="department"
        onChange={inputChange}
        value={departmentsDropdown.filter((item) => {
          return item.value === formData.department;
        })}
        options={departmentsDropdown}
      />
      <button type="submit" onClick={createEmployee}>
        Save
      </button>
      {/* A separate personal plugin for the modal window is being displayed depending on the form submission */}
      {openModal && (
        <ModalPlugin showModal={setOpenModal} modalText="Employee created!" />
      )}
    </form>
  );
}

export default EmployeeForm;
