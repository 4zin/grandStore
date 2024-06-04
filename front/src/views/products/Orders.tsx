import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";

export default function Orders() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      "UserProducts must be used within a ProductsContextProvider"
    );
  }

  const { orders } = context;

  return (
    <div>
      <h1>User Orders</h1>
      <div className="grid grid-cols-3 gap-4">
        {orders.map((order) => (
          <div key={order.id}>
            <div>
              <h2>Order: {order.id}</h2>
              <div className="grid grid-cols-2">
                {order.items.map((item) => (
                  <div key={item.id}>
                    <img
                      src={item.product.images}
                      alt={item.product.title}
                      className="aspect-video w-20"
                    />
                    <p>Title: {item.product.title}</p>
                    <p>Price: {item.product.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
