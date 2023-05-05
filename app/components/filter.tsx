"use client";
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Datepicker from "react-tailwindcss-datepicker";
import { getEarthquakes, Earthquake } from "../api/earthquakeList";
import dayjs from "dayjs";
import { Magnitude } from "../types/layout";
import { FilterProps } from "../types/layout";

const numbers = [
  { id: 1, value: 0, text: "& above" },
  { id: 2, value: 1, text: "& above" },
  { id: 3, value: 2, text: "& above" },
  { id: 4, value: 3, text: "& above" },
  { id: 5, value: 4, text: "& above" },
  { id: 6, value: 5, text: "& above" },
  { id: 7, value: 6, text: "& above" },
  { id: 8, value: 7, text: "& above" },
  { id: 9, value: 8, text: "& above" },
  { id: 10, value: 9, text: "& above" },
  { id: 11, value: 10, text: "& above" },
];

function classNames(...classes: [any]) {
  return classes.filter(Boolean).join(" ");
}

export default function Filter({ setSelectedMagnitude, onChange }: FilterProps) {
  const [selected, setSelected] = useState(numbers[0]);
  const [value, setValue] = useState({
    startDate: dayjs().startOf('month').toDate(),
    endDate: dayjs().toDate()
  });

  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);

  const handleFilter = async (newValue: any) => {
    setValue(newValue);
    const { startDate, endDate } = value;
    const fetchedEarthquakes = await getEarthquakes(startDate, endDate);
    setEarthquakes(fetchedEarthquakes);
  };

  const handleDateChange = (value:any) => {
    const { startDate, endDate } = value;
    setValue({ startDate, endDate });
    onChange(startDate, endDate);
  };

  useEffect(() => {
    handleFilter(value);
  }, [value]);

  const handleChange = (value: { id: number; value: number, text: string }) => {
    setSelectedMagnitude(value);
    setSelected(value);
  };

  return (
    <div className="flex container mt-10">
      <div className="flex flex-col lg:w-3/12 justify-start ">
        <Listbox value={selected} onChange={handleChange}>
          {({ open }) => (
            <div className="flex flex-col w-full">
              <Listbox.Label className="block text-sm w-full font-medium leading-10 text-gray-900">
                Magnitude
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
                    {numbers.map((mag) => (
                      <Listbox.Option
                        key={mag.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-indigo-600 text-white py-2 pl-3"
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
                                    : "font-normal block truncate"
                                )}
                              >
                                {mag.value} {mag.text}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active
                                    ? "text-white"
                                    : "text-indigo-600 absolute inset-y-0 right-0 flex items-center"
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

      <div className="flex flex-col lg:w-4/12">
        <label className="leading-10">test</label>
        <div className="mt-2 h-12">
          <Datepicker value={value} maxDate={dayjs().toDate()} onChange={handleDateChange} />
        </div>
      </div>
    </div>
  );
}
