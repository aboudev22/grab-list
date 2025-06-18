import { Reorder } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(["Card 1", "Card 2", "Card 3"]);

  return (
    <div className="w-screen h-screen bg-pink-950 flex justify-center items-center">
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="flex flex-col gap-2 bg-pink-800 p-14 rounded-md"
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            className="text-white text-xs flex items-center justify-center font-bold w-20 h-20 bg-pink-500 rounded-md cursor-grab active:cursor-grabbing"
          >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
