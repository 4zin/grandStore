import React from "react";

export default function CreateProducts() {
  return (
    <form className="flex flex-col items-center justify-center mt-8">
      <div className="flex flex-col gap-4 w-80">
        <div className="flex flex-col">
          <label className="mb-2">Title: </label>
          <input type="text" required className="rounded px-2 py-1" />
        </div>

        <div className="flex flex-col">
          <label className="mb-2">Quantity: </label>
          <input type="text" required className="rounded px-2 py-1" />
        </div>

        <div className="flex flex-col">
          <label className="mb-2">Price: </label>
          <input type="text" required className="rounded px-2 py-1" />
        </div>

        <div className="flex flex-col">
          <label className="mb-2">Image: </label>
          <input type="text" required className="rounded px-2 py-1" />
        </div>
      </div>
      <button
        type="submit"
        className="bg-cyan-300 text-black font-bold mt-4 mb-4 px-4 py-2 border border-black rounded hover:bg-cyan-400"
      >
        Create
      </button>
    </form>
  );
}
