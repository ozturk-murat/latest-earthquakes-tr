"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { JetBrains_Mono } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
import { Earthquake } from "../api/earthquakeList";

import styles from "../../styles/header.module.css";

export default function Card() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
    >
      <div className="w-1/4 h-1/2 bg-white rounded-lg pt-2 p-6 flex flex-col justify-between z-50">
        <div className="w-full h-2/10 pb-0 mb-0 overflow-hidden justify-end flex items-end">
          <button
            className="top-2 right-2 p-2 text-gray-700 rounded-full hover:bg-gray-300"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 
                1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 1 0 1.414-1.414L11.414 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-4/10 overflow-hidden">
          <img
            src="https://via.placeholder.com/300x150"
            alt="Deprem"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-4/10 flex flex-col justify-center">
          <h3 className="text-lg font-bold mb-2">Deprem Detayları</h3>
          <ul>
            <li className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Tarih:</span>{" "}
              <span>01/04/2023</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Saat:</span> <span>13:27:34</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Büyüklük:</span> <span>4.5</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Derinlik:</span>{" "}
              <span>10 km</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Lokasyon:</span>{" "}
              <span>İstanbul</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
