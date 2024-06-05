import { useCart } from "../hooks/useCart";
import { Products } from "../types";
import { AddCartIcon, RemoveCartIcon } from "./Icons";

export default function Card({ products }: { products: Products[] }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const isInCart = (product: Products) => {
    return cart.some((item) => item.id === product.id);
  };

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
            className="aspect-video w-64 rounded-md"
          />
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <h1>
                <strong>{products.title}</strong>
              </h1>
              <p>
                <strong>Price:</strong> {products.price}
              </p>
              <p>
                <strong>Quantity:</strong> {products.quantity}
              </p>
            </div>
            <button
              onClick={() => {
                isInCart(products)
                  ? removeFromCart(products)
                  : addToCart(products);
              }}
              className="text-accents"
            >
              {isInCart(products) ? <RemoveCartIcon /> : <AddCartIcon />}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
