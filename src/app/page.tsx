import Sections from "@/components/shared/sections";
import { MainLayout } from "@/layouts/main-layout";
import HomePages from "@/pages/home/home-page";
import ProductsPages from "@/pages/home/products-page";
import SecurityPages from "@/pages/home/security-page";
import StartPages from "@/pages/home/start-page";

export default function Home() {
  return (
    <MainLayout>
      <Sections
        id="home"
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted"
      >
        <HomePages />
      </Sections>

      <Sections
        id="products"
        className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center"
      >
        <ProductsPages />
      </Sections>

      <Sections
        id="security"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center"
      >
        <SecurityPages />
      </Sections>

      <Sections
        id="start"
        className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center"
      >
        <StartPages />
      </Sections>
    </MainLayout>
  );
}
