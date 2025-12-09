"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    if (!user) return;
    const data = await getItems(user.uid);
    setItems(data);
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { id, ...newItem }]);
  };

  const handleItemSelect = (item) => {
    setSelectedItemName(item.name.trim());
  };

  if (!user) {
    return (
      <main className="p-6">
        <p>You must be logged in to view this page.</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List App</h1>
      <div className="flex gap-8">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
