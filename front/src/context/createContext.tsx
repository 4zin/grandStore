/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";
import { CreateProductContextProps } from "../types";
import { createProducts } from "../services/productsService";
import { ProductsContext } from "./productsContext";

export const CreateContext = createContext<
  CreateProductContextProps | undefined
>(undefined);

export function CreateProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [images, setImages] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    throw new Error(
      "ProductsContext must be used within a ProductsContextProvider"
    );
  }

  const { addProduct } = productsContext;

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const newProduct = await createProducts(title, quantity, price, images);
      addProduct(newProduct.data);
      setMessage("Product created successfully");
      setTitle("");
      setQuantity(0);
      setPrice(0);
      setImages("");
      setError("");
    } catch (error: any) {
      setMessage("");
      setError(error.response.data.message);
    }
  };

  return (
    <CreateContext.Provider
      value={{
        title,
        setTitle,
        quantity,
        setQuantity,
        price,
        setPrice,
        images,
        setImages,
        submitHandler,
        message,
        error,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}
