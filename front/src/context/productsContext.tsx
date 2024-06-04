import { createContext, useEffect, useState } from "react";
import { Orders, Products, ProductsContextProps } from "../types";
import { getProdcuts } from "../services/productsService";
import { getOrders } from "../services/purchaseService";

export const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Products[]>([]);
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProdcuts();
        return setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUserProducts = async () => {
      try {
        const userProductsData = await getOrders();
        return setOrders(userProductsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
    fetchUserProducts();
  }, []);

  const addProduct = (product: Products) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <ProductsContext.Provider value={{ products, orders, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}
