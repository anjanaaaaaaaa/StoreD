import React from "react";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import DashLayout from "../components/layouts/DashLayout";

const Dashboard: NextPageWithLayout = () => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashLayout>{page}</DashLayout>;
};

export default Dashboard;
