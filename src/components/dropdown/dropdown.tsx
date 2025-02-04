import React, { useCallback, useEffect, useState } from "react";
import { GoChevronDown, GoSearch } from "react-icons/go";
import { IoCloseCircleSharp } from "react-icons/io5";

type Props = {
  label: string;
  placeholder: string;
  isMultiple: boolean;
  withSearch: boolean;
  options: { label: string; value: string }[];
  outlined: boolean;
  onChange?: (e: string | string[]) => void;
};

const Dropdown = React.memo((props: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | string[]>("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Highlight matched text
  const highlightText = useCallback((text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-teal-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  }, []);

  const selectData = (val: string) => {
    if (props.isMultiple) {
      if (selectedOption.includes(val) && Array.isArray(selectedOption)) {
        setSelectedOption(
          selectedOption?.filter((item: string) => item !== val)
        );
      } else {
        setSelectedOption([...selectedOption, val]);
      }
    } else {
      setSelectedOption(val);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(props.isMultiple ? [] : "");
  }, [props.isMultiple]);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(selectedOption);
    }
  }, [selectedOption, props]);
  return (
    <div className="flex items-center gap-x-5">
      <label htmlFor="">{props.label}</label>
      <div className="relative  w-full">
        {/* Selected Option */}
        <div
          className={`flex items-center justify-between  px-4 py-2 rounded-lg shadow-sm cursor-pointer ${
            props.outlined ? "border border-gray-300" : " bg-gray-300"
          } `}
          onClick={() => setIsOpen(!isOpen)}
        >
          {props.isMultiple && Array.isArray(selectedOption) ? (
            <>
              <div className="flex items-center gap-1">
                {selectedOption.map((item: string) => {
                  return (
                    <div className="bg-gray-100 p-1 px-2 rounded-lg flex items-center max-w-32  w-full">
                      <span className="truncate">{item}</span>

                      <IoCloseCircleSharp
                        className="text-gray-300 w-6 h-6 cursor-pointer"
                        onClick={() => {
                          setSelectedOption(
                            selectedOption?.filter(
                              (val: string) => val !== item
                            )
                          );
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <span>
              {selectedOption === "" ? props.placeholder : selectedOption}
            </span>
          )}
          <GoChevronDown className="w-4 h-4" />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-[9999]">
            {/* Search Input */}
            {props.withSearch && (
              <div className="flex items-center px-3 py-2 ">
                <GoSearch />
                <input
                  type="text"
                  className="w-full px-2 py-1 text-sm border-none focus:outline-none"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <div
                    className="w-4 h-4 text-gray-400 cursor-pointer"
                    onClick={() => setSearchQuery("")}
                  />
                )}
                {searchQuery && (
                  <IoCloseCircleSharp
                    className="text-gray-300 w-6 h-6 cursor-pointer"
                    onClick={() => setSearchQuery("")}
                  />
                )}
              </div>
            )}

            {/* Options */}
            <ul
              className={`max-h-60 overflow-auto ${
                props.withSearch ? "border-t  border-gray-300" : ""
              }`}
            >
              {props.options.map((option, index) => (
                <li
                  key={index}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-green-100  ${
                    option.value === selectedOption ||
                    selectedOption.includes(option.value)
                      ? "bg-green-100"
                      : ""
                  }`}
                  onClick={() => {
                    selectData(option.value);
                  }}
                >
                  {highlightText(option.label, searchQuery)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});

export default Dropdown;
