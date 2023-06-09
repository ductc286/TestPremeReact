import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import MatineTable from "src/components/MatineTable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>matine-table</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
        <Link href={"/"}>Home</Link>
        <div style={{ width: "1000px", height: "800px" }}>
          <MatineTable />
        </div>
      </div>
    </>
  );
}
