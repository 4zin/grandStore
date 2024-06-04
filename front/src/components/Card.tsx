import { useCart } from "../hooks/useCart";
import { Products } from "../types";
import { CartIcon } from "./Icons";

export default function Card({ products }: { products: Products[] }) {
  const { addToCart } = useCart();

  return (
    <ul className="grid grid-cols-3 gap-4">
      {products.map((products) => (
        <li
          key={products.id}
          className="flex flex-col justify-center items-center"
        >
          <img
            src={products.images}
            alt={products.title}
            className="aspect-video w-64"
          />
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <h1>{products.title}</h1>
              <p>Price: {products.price}</p>
              <p>Quantity: {products.quantity}</p>
            </div>
            <button onClick={() => addToCart(products)}>{<CartIcon />}</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
