"use client";
import React, { useState, useEffect } from "react";

//Utils
import { getEarthquakes, Earthquake } from "./api/earthquakeList";
import dayjs from "dayjs";

//Components
import Filter from "./components/filter";
import Spinner from "./components/spinner";
import ListBox from "./components/listBox";

interface Magnitude {
  id: number;
  value: number;
}

const Page = () => {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedMagnitude, setSelectedMagnitude] = useState<Magnitude>({
    id: 1,
    value: 0,
  });
  const [filteredMagData, setFilteredMagData] = useState<Earthquake[]>([]);
  const defaultStartDate = dayjs().startOf("month").toDate();
  const defaultEndDate = dayjs().toDate();

  useEffect(() => {
    const fetchEarthquakes = async () => {
      const earthquake = await getEarthquakes(defaultStartDate, defaultEndDate);
      setEarthquakes(earthquake);
      setLoading(false);
    };
    fetchEarthquakes();
  }, []);

  const handleFilterChange = async (startDate: Date, endDate: Date) => {
    const fetchedEarthquakes = await getEarthquakes(startDate, endDate);
    setEarthquakes(fetchedEarthquakes);
  };

  useEffect(() => {
    if (selectedMagnitude === null) {
      setFilteredMagData(earthquakes);
    } else {
      const filtered = earthquakes.filter(
        (earthquake) => earthquake.properties.mag >= selectedMagnitude.value
      );
      setFilteredMagData(filtered);
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
    <main className="flex flex-col items-center h-screen md:container md:mx-auto px-10">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="container">
            <Filter
              setSelectedMagnitude={setSelectedMagnitude}
              onChange={handleFilterChange}
            />
          <div className="container">
            <div className="w-full border-b my-10 border-gray-400"></div>
          </div>
          <div className="container justify-start items-start italic mb-5 text-gray-500 text-sm">
            Listed below are{" "}
            {filteredMagData ? filteredMagData.length : earthquakes.length}{" "}
            recent earthquakes
            <p className=" justify-start items-start italic mb-5 text-gray-500 text-xs">
              This data is provided by USGS. Please note that some data may not
              include location details.
            </p>
          </div>
          <ListBox
            data={filteredMagData.length === 0 && selectedMagnitude === null? earthquakes : filteredMagData}
          />
        </div>
      )}
    </main>
  );
};

export default Page;
