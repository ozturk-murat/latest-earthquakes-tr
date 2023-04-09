"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { JetBrains_Mono } from "next/font/google";
import styles from "../../styles/header.module.css";

const inter = JetBrains_Mono({ subsets: ["latin"] });

const people = [
  {
    id: 1,
    magnitude: "0 >",
  },
  {
    id: 2,
    magnitude: "1 >",
  },
  {
    id: 3,
    magnitude: "2 >",
  },
  {
    id: 4,
    magnitude: "3 >",
  },
  {
    id: 5,
    magnitude: "4 >",
  },
  {
    id: 6,
    magnitude: "5 >",
  },
  {
    id: 7,
    magnitude: "6 >",
  },
  {
    id: 8,
    magnitude: "7 >",
  },
  {
    id: 9,
    magnitude: "8 >",
  },
  {
    id: 10,
    magnitude: "9 >",
  },
  {
    id: 11,
    magnitude: "10 >",
  },
];
function classNames(...classes: [any]) {
  return classes.filter(Boolean).join(" ");
}

export default function Filter() {
  const [selected, setSelected] = useState(people[3]);
  return (
    <div className="flex justify-evenly flex-row mt-10 mb-10 bg-grey">
      <div className="flex-initial flex-col w-5/12 justify-start bg-slate-500">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div className="flex flex-col w-6">
            <Listbox.Label className="block text-sm w-full font-medium leading-6 text-gray-900">
              Magnitude
            </Listbox.Label>
            <div className="relative mt-2 w-full">
              <Listbox.Button className="relative w-12/12 h-12 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">
                    {selected.magnitude}
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
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((magnitude) => (
                    <Listbox.Option
                      key={magnitude.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={magnitude}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal ml-3 block truncate"
                              )}
                            >
                              {magnitude.magnitude}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
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
    </div>
  );
}