import { Cart } from "../../components/Cart";
import Products from "../products/Products";

export default function Home() {
  return (
    <section>
      <div className="flex justify-between">
        <h1>This is the home page</h1>
        <Cart />
      </div>
      <Products />
    </section>
  );
}
