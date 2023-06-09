"use client";
import { useState } from "react";
import { Earthquake } from "../api/earthquakeList";
import Card from "./detailsCard";
import { ListBoxProps } from "../types/layout";


const ListBox = ({ data }: ListBoxProps) => {
  const [selectedItem, setSelectedItem] = useState<Earthquake | null>(null);

  const handleClick = (item: Earthquake) => {
    setSelectedItem(item);
  };

  function getMagColor(mag: number): string {
    const colors = [
      "bg-gray-500",
      "bg-blue-500",
      "bg-yellow-300",
      "bg-yellow-400",
      "bg-yellow-500",
      "bg-red-500",
      "bg-red-700",
      "bg-purple-800",
    ];

    if (mag < 0 || mag > 10) {
      return colors[0];
    } else {
      const index = Math.round((mag / 10) * colors.length);
      
      return colors[index];
    }
  }

  return (
    <div className=" lg:container grid md:grid-cols-3 sm:grid-cols-2 gap-5 space-x-0 space-y-0 h-32">
      {data.map((item) => (
        <div key={item.id} onClick={() => handleClick(item)}>
          <div
            key={item.id}
            className="flex flex-row h-20 shadow-lg border border-blac cursor-pointer rounded-md bg-white"
          >
            <div
              className={`flex justify-center items-center w-2/12 h-ful rounded-md text-white ${getMagColor(
                item.properties.mag
              )}`}
            >
              {item.properties.mag}
            </div>
            <div className="flex justify-start px-10 items-center w-10/12 h-full rounded-md">
              {item.properties.place &&
                item.properties.place.substring(
                  item.properties.place.indexOf("of") + 2
                )}
            </div>
          </div>
        </div>
      ))}
      {selectedItem && (
        <Card onClose={() => setSelectedItem(null)} data={selectedItem} />
      )}
    </div>
  );
};

export default ListBox;
