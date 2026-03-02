import TableHead from "../TableHead/TableHead.component";
import TableRow from "../TableRow/TableRow.component";

import pendingIcon from "../../assets/icons8-exclamation-mark-64.png";
import approvedIcon from "../../assets/icons8-done-64.png";
import rejectedIcon from "../../assets/icons8-cancel-40.png";

function Table() {
  return (
    <table className="table my-4">
      <TableHead />
      <tbody>
        <TableRow icon={pendingIcon} />
        <TableRow icon={approvedIcon} />
        <TableRow icon={rejectedIcon} />
      </tbody>
    </table>
  );
}

export default Table;
