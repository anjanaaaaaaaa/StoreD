import React from "react";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import DashLayout from "../components/layouts/DashLayout";
import CardsArea from "../components/Dashboard/CardsArea/CardsArea";

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-offWhite flex-1">
      <CardsArea />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashLayout>{page}</DashLayout>;
};

export default Home;
