import Hero from "../components/Hero";
import ProductList from "../components/product/ProductList";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductList mt={10} title="Most popular products" />
    </>
  );
}
