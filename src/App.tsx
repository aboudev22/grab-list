import { Reorder } from "framer-motion";
import { useState } from "react";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <div className="bg-neutral-900 h-screen w-screen flex justify-center items-center">
      <Reorder.Group
        className="bg-green-900 p-4 flex flex-col gap-2 w-sm"
        onReorder={setItems}
        values={items}
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            className="text-white text-4xl p-4 font-bold bg-green-500 rounded-md cursor-grab"
          >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
