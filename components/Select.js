import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiSelector } from "react-icons/hi";

export default function Select({ data, selected, setSelected }) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full bg-white dark:bg-gray-600 border dark:border-gray-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:border-purple-500  rounded-md px-3 py-2 text-left shadow-sm flex justify-between items-center border-gray-300 sm:text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            {selected.name}
          </span>
          <span>
            <HiSelector className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-in duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-out duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute z-10 w-full py-1 mt-1 mb-1 overflow-auto text-base bg-white dark:bg-gray-600 rounded-md shadow-lg max-h-52 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm custom-scroll">
            {data.map((data, dataIdx) => (
              <Listbox.Option
                key={dataIdx}
                className={({ active }) =>
                  `${
                    active
                      ? "text-yellow-900 bg-yellow-100 dark:bg-yellow-200"
                      : "text-gray-900 dark:text-gray-300"
                  }
                    cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={data}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {data.name}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-yellow-600" : "text-yellow-600"
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <HiCheck className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
