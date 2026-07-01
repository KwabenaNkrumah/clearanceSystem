import TableHead from "../TableHead/TableHead.component";
import TableRow from "../TableRow/TableRow.component";

import pendingIcon from "../../assets/icons8-exclamation-mark-64.png";
import approvedIcon from "../../assets/icons8-done-64.png";
import rejectedIcon from "../../assets/icons8-cancel-40.png";
import { useContext } from "react";
import RequestClearanceContext from "../../context/RequestClearanceContext/RequestClearanceContext";

function Table(props) {
  // const {
  //   state: { departments },
  // } = useContext(RequestClearanceContext);
  // console.log(departments);

  const rowDisplay = props.departments.map((dept, i) => {
    const [icon, color] =
      dept.status === "Pending"
        ? [pendingIcon, "warning"]
        : dept.status === "Approved"
          ? [approvedIcon, "success"]
          : [rejectedIcon, "danger"];
    return (
      <TableRow
        key={i}
        icon={icon}
        departmentName={dept.officer}
        status={dept.status}
        comment={dept.comment}
        color={`text-${color}`}
      />
    );
  });
  return (
    <table className="table my-4">
      <TableHead />
      <tbody>{rowDisplay}</tbody>
    </table>
  );
}

export default Table;
