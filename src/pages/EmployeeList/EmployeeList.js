import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Context } from "../../utils/Context";
import "react-data-table-component-extensions/dist/index.css";
import { tableColumns } from "../../assets/tableData";

// Table with all the data after filling out the form
function EmployeeList() {
  
  // Additional styling variable
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

  // Using context, Data Table Extensions and Data Table to generate a table
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
