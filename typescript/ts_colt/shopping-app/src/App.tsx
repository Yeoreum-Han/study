import React, { useState } from 'react';
import './App.css';
import Item from './models/item';
import ShoppingList from './component/ShoppingList';
import ShoppingListForm from './component/ShoppingListForm';
import { v4 as getId } from 'uuid';


function App() {

  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: getId(), product, quantity }]);
  }

  //   const items = [
  //     { id: 1, product: "Lemon", quantity: 3 },
  //     { id: 2, product: "Chicken Breast", quantity: 2 },
  // ];

  return (
    <div className="App">
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
