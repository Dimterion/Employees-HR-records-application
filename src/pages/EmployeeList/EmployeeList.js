import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Context } from "../../utils/Context";
import "./employeeList.css";
import "react-data-table-component-extensions/dist/index.css";
import { tableColumns } from "../../assets/tableData";

function EmployeeList() {
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
          >
            <DataTable
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
