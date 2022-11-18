import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ChangeEvent } from "react";
import { storeFiles } from "../utils/store";

const Home: NextPage = () => {
  const storeToFil = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files) storeFiles(Array.from(e.target.files));
  };

  return (
    <div className=" min-h-screen grid place-items-center py-2 bg-offWhite">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
