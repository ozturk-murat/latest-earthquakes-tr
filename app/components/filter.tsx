"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { JetBrains_Mono } from "next/font/google";

export interface Magnitude {
  id: number;
  value: number;
}

const numbers = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
  { id: 3, value: 2 },
  { id: 4, value: 3 },
  { id: 5, value: 4 },
  { id: 6, value: 5 },
  { id: 7, value: 6 },
  { id: 8, value: 7 },
  { id: 9, value: 8 },
  { id: 10, value: 9 },
  { id: 11, value: 10 },
];

function classNames(...classes: [any]) {
  return classes.filter(Boolean).join(" ");
}

type Number = {
  id: number;
  value: number;
  magnitude: string;
};

interface FilterProps {
  setSelectedMagnitude: React.Dispatch<React.SetStateAction<Magnitude>>;
}

export default function Filter({ setSelectedMagnitude }: FilterProps) {
  const [selected, setSelected] = useState(numbers[0]);

  const handleChange = (value: { id: number; value: number }) => {
    setSelected(value)
    setSelectedMagnitude(value);
  };
  

  return (
    <div className="flex container mt-10">
      <div className="flex flex-col lg:w-3/12 justify-start">
        <Listbox value={selected} onChange={handleChange}>
          {({ open }) => (
            <div className="flex flex-col w-full">
              <Listbox.Label className="block text-sm w-full font-medium leading-10 text-gray-900">
                Magnitude
              </Listbox.Label>
              <div className="relative mt-2 w-full">
              <Listbox.Button className="relative h-12 w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">
                      {selected.value}
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
                    {numbers.map((mag) => (
                      <Listbox.Option
                        key={mag.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={mag}
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
                                {mag.value}
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

      <div className="flex flex-col lg:w-3/12 justify-start ">
        <Listbox value={selected} onChange={handleChange}>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm w-full font-medium leading-10 text-gray-900">
                Assigned to
              </Listbox.Label>
              <div className="relative mt-2">
                <Listbox.Button className="relative h-12 w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">
                      {selected.value}
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
                  <Listbox.Options className="absolute w-full z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {numbers.map((number) => (
                      <Listbox.Option
                        key={number.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={number.value}
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
                                {number.value}
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
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
}
