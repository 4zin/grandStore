import { useContext } from "react";
import Card from "../../components/Card";
import { ProductsContext } from "../../components/context/productsContext";

export default function Products() {
  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    throw new Error(
      "ProductsContext must be used within a ProductsContextProvider"
    );
  }

  const { products } = productsContext;

  return (
    <div>
      <Card products={products} />
    </div>
  );
}
