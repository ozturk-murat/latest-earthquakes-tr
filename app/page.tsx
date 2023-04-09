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
      <div className="flex w-[90vw] px-24">
        <Filter/>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.magnitudeLabel}>7.5</div>

          <div className={styles.city}>
          <h2 className={inter.className}>
              Sincan, Ankara
            </h2>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.magnitudeLabel}>7.5</div>

          <div className={styles.city}>
          <h2 className={inter.className}>
              Sincan, Ankara
            </h2>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.magnitudeLabel}>7.5</div>

          <div className={styles.city}>
          <h2 className={inter.className}>
              Sincan, Ankara
            </h2>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.magnitudeLabel}>7.5</div>

          <div className={styles.city}>
          <h2 className={inter.className}>
              Sincan, Ankara
            </h2>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.magnitudeLabel}>7.5</div>

          <div className={styles.city}>
          <h2 className={inter.className}>
              Sincan, Ankara
            </h2>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.magnitudeLabel}>7.5</div>

          <div className={styles.city}>
          <h2 className={inter.className}>
              Sincan, Ankara
            </h2>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.magnitudeLabel}>7.5</div>

          <div className={styles.city}>
          <h2 className={inter.className}>
              Sincan, Ankara
            </h2>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.magnitudeLabel}>7.5</div>

          <div className={styles.city}>
          <h2 className={inter.className}>
              Sincan, Ankara
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}