"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [v_name, setName] = useState("");
  const [v_quantity, setQuantity] = useState(1);
  const [v_category, setCategory] = useState("Produce");

  const plus = () => {
    if (v_quantity < 20) setQuantity(v_quantity + 1);
  };

  const minus = () => {
    if (v_quantity > 1) setQuantity(v_quantity - 1);
  };

  const resetForm = () => {
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name: v_name,
      quantity: v_quantity,
      category: v_category,
    };
    onAddItem(item);
    resetForm();
  };

  const categories = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  let buttonGreen =
    "bg-green-700 hover:bg-green-500 active:bg-green-700 text-white rounded size-10 ml-10 mr-2 cursor-pointer transition-colors";
  let buttonRed =
    "bg-red-700 hover:bg-red-300 active:bg-red-700 text-white rounded size-10 cursor-pointer transition-colors";

  if (v_quantity >= 20)
    buttonGreen =
      "bg-gray-400 text-white rounded size-10 ml-10 mr-2 cursor-not-allowed";

  if (v_quantity === 1)
    buttonRed = "bg-gray-400 text-white rounded size-10 cursor-not-allowed";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center"
    >
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="mb-4">
          <input
            type="text"
            value={v_name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item name"
            required
            className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 flex items-center gap-2">
          <div className="w-12 text-center bg-white text-black font-semibold text-lg px-2 py-1 rounded border border-gray-300">
            {v_quantity}
          </div>
          <button
            type="button"
            onClick={plus}
            className={buttonGreen}
            disabled={v_quantity >= 20}
          >
            +
          </button>
          <button
            type="button"
            onClick={minus}
            className={buttonRed}
            disabled={v_quantity <= 1}
          >
            -
          </button>
        </div>
        <div className="mb-4">
          <select
            value={v_category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
}