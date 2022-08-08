import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Context } from "../../utils/Context";
import "./employeeList.css";
import "react-data-table-component-extensions/dist/index.css";
import { tableColumns } from "../../assets/tableData";

function EmployeeList() {
  const tableStyle = {
    head: {
      style: {
        fontSize: "1rem",
        fontWeight: "bold",
      },
    },
    headCells: {
      style: {
        padding: "5px",
      },
    },
  };

  return (
    <>
      <Context.Consumer>
        {(context) => (
          <DataTableExtensions
            columns={tableColumns}
            data={context.contextData}
            export={false}
            print={false}
            filterPlaceholder={"Search"}
            filterDigit={0}
          >
            <DataTable
              customStyles={tableStyle}
              columns={tableColumns}
              data={context.contextData}
              pagination
              highlightOnHover
            />
          </DataTableExtensions>
        )}
      </Context.Consumer>
      <Link to="/">Home</Link>
    </>
  );
}

export default EmployeeList;
