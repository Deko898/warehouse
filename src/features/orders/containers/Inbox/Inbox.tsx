import React from "react";
import MatTable from "../../../../common/components/Table";
import PerfectScrollbar from "react-perfect-scrollbar";

const Inbox: React.FunctionComponent = () => {
  return (
    <div>
    <PerfectScrollbar>
      <MatTable />
    </PerfectScrollbar>
    </div>
  );
};

export default Inbox;
