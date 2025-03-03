import Sections from "@/components/shared/sections";
import { MainLayout } from "@/layouts/main-layout";
import HomePages from "@/pages/home/home-page";
import ProductsPages from "@/pages/home/products-page";

export default function Home() {
  return (
    <MainLayout>
      <Sections
        id="home"
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted"
      >
        <HomePages />
      </Sections>

      <Sections id="productos" className="w-full py-12 md:py-24 lg:py-32">
        <ProductsPages />
      </Sections>
    </MainLayout>
  );
}
