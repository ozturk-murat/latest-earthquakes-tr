"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { JetBrains_Mono } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
import { Earthquake } from "../api/earthquakeList";

import styles from "../../styles/header.module.css";

const inter = JetBrains_Mono({ subsets: ["latin"] });

const people = [
  {
    id: 1,
    value: 1,
    magnitude: "0 & above",
  },
  {
    id: 2,
    value: 2,
    magnitude: "1 & above",
  },
  {
    id: 3,
    value: 3,
    magnitude: "2 & above",
  },
  {
    id: 4,
    value: 4,
    magnitude: "3 & above",
  },
  {
    id: 5,
    value: 5,
    magnitude: "4 & above",
  },
  {
    id: 6,
    value: 6,
    magnitude: "5 & above",
  },
  {
    id: 7,
    value: 7,
    magnitude: "6 & above",
  },
  {
    id: 8,
    value: 8,
    magnitude: "7 & above",
  },
  {
    id: 9,
    value: 9,
    magnitude: "8 & above",
  },
  {
    id: 10,
    value: 10,
    magnitude: "9 & above",
  },
  {
    id: 11,
    value: 11,
    magnitude: "10 & above",
  },
];
function classNames(...classes: [any]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  onFilterChange: (selectedValue: number) => void
}

export default function Filter({ onFilterChange }: Props) {
  const [selected, setSelected] = useState<number>(0);

  const handleSelection = (value: number) => {
    setSelected(value)
    onFilterChange(value)
  }

  return (
    <div className="flex container mt-10">
      <div className="flex flex-col lg:w-3/12 justify-start">
        <Listbox value={selected} onChange={handleSelection}>
          {({ open }) => (
            <div className="flex flex-col w-full">
              <Listbox.Label className="block text-sm w-full font-medium leading-10 text-gray-900">
                Magnitude
              </Listbox.Label>
              <div className="w-full">
                <Listbox.Button className="w-full h-12 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">
                      {selected}
                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-50 z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((magnitude) => (
                      <Listbox.Option
                        key={magnitude.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={magnitude}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected
                                    ? "font-semibold"
                                    : "font-normal ml-3 block truncate"
                                )}
                              >
                                {magnitude.magnitude}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active
                                    ? "text-white"
                                    : "text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </div>
          )}
        </Listbox>
      </div>
      <div className="flex justify-center items-end">
        <div className="mx-10 border-l border-gray-400 h-12"></div>
      </div>
    </div>
  );
}
function onFilterChange(value: number) {
  throw new Error("Function not implemented.");
}

