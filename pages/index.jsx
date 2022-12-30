import { Banner } from "../components/Banner";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Arbol de Habilidades</h1>
      <Banner />
    </MainLayout>
  );
}
