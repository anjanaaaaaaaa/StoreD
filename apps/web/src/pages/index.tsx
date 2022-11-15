import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ChangeEvent } from "react";
// import { storeFiles } from "../utils/store";

const Home: NextPage = () => {
  const storeToFil = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    // storeFiles(e.target.files)
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input type="file" onChange={storeToFil} />
    </div>
  );
};

export default Home;
