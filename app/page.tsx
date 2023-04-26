"use client";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Filter from "./components/filter";
import { getEarthquakes, Earthquake } from "./api/earthquakeList";
import Spinner from "./components/spinner";
import ListBox from "./components/listBox";

type EarthquakeData = {
  id: string;
  title: string;
  place: string;
  mag: number;
  // Eksik olan diğer veriler buraya eklenebilir.
};

interface EarthquakeListProps {}
interface FilterProps {
  setFilteredData: React.Dispatch<React.SetStateAction<Earthquake[]>>;
}

interface Magnitude {
  id: number;
  value: number;
}

const Page = () => {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredDataValue, setFilteredDataValue] = useState<number>(0);
  const [selectedMagnitude, setSelectedMagnitude] = useState<Magnitude>({ id: 1, value: 0 });
  const [filteredMagData, setFilteredMagData] = useState<Earthquake[]>([]);

  useEffect(() => {
    const fetchEarthquakes = async () => {
      const earthquakes = await getEarthquakes(startDate, endDate);
      setEarthquakes(earthquakes);
      setLoading(false);
      setFilteredDataValue(earthquakes.length);
      console.log("data", earthquakes);
    };
  
    fetchEarthquakes();
  }, [startDate, endDate]);

  const handleFilterChange = async (startDate: Date, endDate: Date) => {
    const fetchedEarthquakes = await getEarthquakes(startDate, endDate);
    setEarthquakes(fetchedEarthquakes);
  };

  useEffect(() => {
    if (selectedMagnitude === null) {
      setFilteredMagData(earthquakes);
    } else {
      const filtered = earthquakes.filter((earthquake) => earthquake.properties.mag >= selectedMagnitude.value);
      setFilteredMagData(filtered);
      console.log("filteredMagData", filteredMagData);
      
    }
  }, [selectedMagnitude, earthquakes, getEarthquakes]);

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen">
        <Spinner />
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center h-screen md:container md:mx-auto">
      <div className="container">
        <Filter setSelectedMagnitude={setSelectedMagnitude} onChange={handleFilterChange}/>
      </div>
      <div className="container">
        <div className="w-full border-b my-10 border-gray-400"></div>
      </div>
      <div className="container justify-start items-start italic mb-5 text-gray-500 text-sm">
        Listed below are {filteredMagData ? filteredMagData.length : earthquakes.length} recent earthquakes
        <p className=" justify-start items-start italic mb-5 text-gray-500 text-xs">
          This data is provided by USGS. Please note that some data may not
          include location details.
        </p>
      </div>
      <ListBox data={filteredMagData? filteredMagData : earthquakes} />
    </main>
  );
};

export default Page;
