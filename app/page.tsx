"use client";
import React, { useState, useEffect } from 'react';
import { getEarthquakes } from './api/earthquakeList';


import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Filter from "./components/filter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [color, setColor] = useState("bg-orange-500"); 

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getEarthquakes();
      setEarthquakes(data);
      console.log("data", earthquakes);
      
    };
    fetchUsers();
  }, []);

  return (
    <main className={styles.main}>
      <div className="flex">
        <Filter />
      </div>
      <div className="sm:w-full lg:container justify-center flex flex-wrap gap-6 w-full sm:h-16">
        <div className="flex flex-row h-full shadow-lg sm:w-6/12 lg:w-2/12 border border-blac rounded-xl bg-white">
          <div className={`flex justify-center items-center w-4/12 h-ful rounded-xl ${color}`}>7.5</div>
          <div className="flex justify-start px-10 items-center w-10/12 h-full rounded-xl">City, City</div>
        </div>
        <div className="flex flex-row h-full shadow-lg sm:w-6/12 lg:w-2/12 border border-blac rounded-xl bg-white">
          <div className={`flex justify-center items-center w-4/12 h-ful rounded-xl ${color}`}>7.5</div>
          <div className="flex justify-start px-10 items-center w-10/12 h-full rounded-xl">City, City</div>
        </div>
        <div className="flex flex-row h-full shadow-lg sm:w-6/12 lg:w-2/12 border border-blac rounded-xl bg-white">
          <div className={`flex justify-center items-center w-4/12 h-ful rounded-xl ${color}`}>7.5</div>
          <div className="flex justify-start px-10 items-center w-10/12 h-full rounded-xl">City, City</div>
        </div>
        <div className="flex flex-row h-full shadow-lg sm:w-6/12 lg:w-2/12 border border-blac rounded-xl bg-white">
          <div className={`flex justify-center items-center w-4/12 h-ful rounded-xl ${color}`}>7.5</div>
          <div className="flex justify-start px-10 items-center w-10/12 h-full rounded-xl">City, City</div>
        </div>
      </div>
    </main>
  );
}