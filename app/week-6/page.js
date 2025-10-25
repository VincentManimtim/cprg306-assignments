import React from 'react';
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
