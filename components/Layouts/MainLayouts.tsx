import Head from "next/head";
import styles from "@/components/Layouts/MainLayout.module.css";
import Navbar from "../Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={`${styles.main} `}>{children}</main>
    </>
  );
};

export default MainLayout;
