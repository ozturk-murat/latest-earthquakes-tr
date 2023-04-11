"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Filter from "./components/filter";
import { getEarthquakes, Earthquake } from "./api/earthquakeList";
import Spinner from "./components/spinner";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

interface EarthquakeListProps {}

export default function Home(props: EarthquakeListProps) {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("bg-orange-500");

  useEffect(() => {
    getEarthquakes().then((earthquakes) => {
      setEarthquakes(earthquakes);
      setLoading(false);

      console.log("data", earthquakes);
    });
  }, []);

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen">
        <Spinner />
      </main>
    );
  }

  function getMagColor(mag: number): string {
    const colors = [
      "bg-gray-500",
      "bg-blue-500",
      "bg-yellow-500",
      "bg-orange-500",
      "bg-orange-700",
      "bg-red-500",
      "bg-red-700",
      "bg-purple-800",
    ];
  
    if (mag < 0 || mag > 10) {
      return colors[0];
    } else {
      const index = Math.round((mag / 10) * colors.length);
      console.log("indez", colors[index]);
      
      return colors[index];
    }
  }
  

  return (
    <main className="flex flex-col items-center h-screen md:container md:mx-auto">
      <div className="container">
        <Filter />
      </div>
      <div className="container">
        <div className="w-full border-b my-10 border-gray-400"></div>
      </div>
      <div className="sm:w-full  lg:container grid grid-cols-3 gap-5 space-x-0 space-y-0 h-32">
        {earthquakes.map((earthquakeLists) => (
          <div
            key={earthquakeLists.id}
            className="flex flex-row h-20 shadow-lg border border-blac rounded-md bg-white"
          >
            <div
              className={`flex justify-center items-center w-2/12 h-ful rounded-md text-white ${getMagColor(
                earthquakeLists.properties.mag
              )}`}
            >
              {earthquakeLists.properties.mag}
            </div>
            <div className="flex justify-start px-10 items-center w-10/12 h-full rounded-md">
              {earthquakeLists.properties.place &&
                earthquakeLists.properties.place.substring(
                  earthquakeLists.properties.place.indexOf("of") + 2
                )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
