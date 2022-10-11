import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="홈페이지">
      <div className="  ">
        <h1 className="text-4xl font-bold">Tailwind Css</h1>
        <p>웹서버프로그래밍 송채연</p>
      </div>
    </Layout>
  );
}
