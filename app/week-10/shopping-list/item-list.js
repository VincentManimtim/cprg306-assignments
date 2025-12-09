"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let itemArray = [...items].map((item) => ({ ...item }));

  itemArray.sort((a, b) => {
    if (sortBy === "name") {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    } else if (sortBy === "category") {
      const catA = a.category.toUpperCase();
      const catB = b.category.toUpperCase();
      if (catA < catB) return -1;
      if (catA > catB) return 1;
      return 0;
    }
    return 0;
  });

  const activeButton = "bg-blue-500 text-white";
  const inactiveButton = "bg-gray-200 text-gray-800";

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Item List</h2>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg ${
            sortBy === "name" ? activeButton : inactiveButton
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg ${
            sortBy === "category" ? activeButton : inactiveButton
          }`}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {itemArray.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect && onItemSelect(item)}
          />
        ))}
      </ul>
    </section>
  );
}
