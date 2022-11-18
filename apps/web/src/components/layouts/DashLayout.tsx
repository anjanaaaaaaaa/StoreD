import React, { ReactElement } from "react";
import Sidebar from "../Sidebar/Sidebar";

const DashLayout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default DashLayout;
