import Head from "next/head";
import { Banner } from "../components/Banner";
import { MainLayout } from "../components/layouts/MainLayout";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <MainLayout>
      <h1>I am /Home</h1>
      <Banner />
    </MainLayout>
  );
}
