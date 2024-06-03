import { createContext, useEffect, useState } from "react";
import { Products, ProductsContextProps } from "../types";
import { getProdcuts } from "../services/productsService";

export const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProdcuts();
        return setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}
