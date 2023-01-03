import Head from "next/head";
import { Navbar } from "../Navbar";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Welcome Humans</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/logodrogerz.png" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};
