import { useContext } from "react";
import { CreateContext } from "../../components/context/createContext";

export default function CreateProducts() {
  const createProductsContext = useContext(CreateContext);

  if (!createProductsContext) {
    throw new Error(
      "CreateContext must be used within a CreateContextProvider"
    );
  }

  const {
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
  } = createProductsContext;

  return (
    <section className="border rounded-md px-8 py-6 mt-6">
      <h1 className="flex justify-center text-4xl font-bold">
        Create Products
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center justify-center mt-8"
      >
        <div className="flex flex-col gap-4 w-80">
          <div className="flex flex-col">
            <label className="mb-2">Title: </label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              className="rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Quantity: </label>
            <input
              type="number"
              value={quantity.toString()}
              onChange={(event) => setQuantity(Number(event.target.value))}
              required
              className="rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Price: </label>
            <input
              type="number"
              value={price.toString()}
              onChange={(event) => setPrice(Number(event.target.value))}
              required
              className="rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Image: </label>
            <input
              type="url"
              value={images}
              onChange={(event) => setImages(event.target.value)}
              required
              className="rounded px-2 py-1"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-cyan-300 text-black font-bold mt-4 mb-4 px-4 py-2 border border-black rounded hover:bg-cyan-400"
        >
          Create
        </button>
      </form>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
}
