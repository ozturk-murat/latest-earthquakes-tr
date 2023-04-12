"use client";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Filter from "./components/filter";
import { getEarthquakes, Earthquake } from "./api/earthquakeList";
import Spinner from "./components/spinner";

const inter = Inter({ subsets: ["latin"] });

interface EarthquakeListProps {}
interface FilterProps {
  setFilteredData: React.Dispatch<React.SetStateAction<Earthquake[]>>;
}

interface Magnitude {
  id: number;
  value: number;
}

export default function Home(props: EarthquakeListProps) {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [filteredData, setFilteredData] = useState<Earthquake[]>([]);
  const [selectedMagnitude, setSelectedMagnitude] = useState<Magnitude>({ id: 1, value: 0 });
  const [filteredDataValue, setFilteredDataValue] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEarthquakes().then((earthquakes) => {
      setEarthquakes(earthquakes);
      setLoading(false);
      setFilteredDataValue(earthquakes.length)
      console.log("data", earthquakes);
    });
  }, []);

  useEffect(() => {
    if (selectedMagnitude === null) {
      setFilteredData(earthquakes);
    } else {
      const filtered = earthquakes.filter((earthquake) => earthquake.properties.mag >= selectedMagnitude.value);
      setFilteredDataValue(filtered.length)
      setFilteredData(filtered);
    }
  }, [selectedMagnitude, earthquakes]);


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
      "bg-red-00",
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
        <Filter setSelectedMagnitude={setSelectedMagnitude} />
      </div>
      <div className="container">
        <div className="w-full border-b my-10 border-gray-400"></div>
      </div>
      <div className="container justify-start items-start italic mb-5 text-gray-500 text-sm">Listed below are {filteredDataValue} recent earthquakes</div>
      <div className="sm:w-full  lg:container grid grid-cols-3 gap-5 space-x-0 space-y-0 h-32">
        {filteredData.map((earthquakeLists) => (
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
