"use client";
import { ChevronDown } from "lucide-react";
import { ReactNode, useState, useRef, useEffect } from "react";

interface DropdownOption {
  value: string;
  label: string | ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder,
  className = "",
  disabled = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayText = selectedOption
    ? typeof selectedOption.label === "string"
      ? selectedOption.label
      : String(selectedOption.label)
    : placeholder || "Select an option";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="w-full appearance-none rounded-full bg-[#f2f2f2] px-5 py-3 text-sm font-medium text-neutral-800 placeholder:font-normal placeholder:text-neutral-400 focus:border-[#009186] focus:outline-none focus:ring-2 focus:ring-[#009186] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between"
      >
        <span className="truncate text-left">{displayText}</span>
        <ChevronDown
          className={`h-4 w-4 text-[#009186] transition-transform duration-200 flex-shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="max-h-60 overflow-y-auto">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                    isSelected
                      ? "bg-[#009186] text-white"
                      : "text-neutral-800 hover:bg-gray-50"
                  }`}
                >
                  {typeof option.label === "string" ? option.label : option.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

