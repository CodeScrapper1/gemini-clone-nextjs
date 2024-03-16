import React, { useContext } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Context } from "@/context/ContextProvider";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(Context);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="text-softTextColor" variant="outline">
          Settings
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-44 bg-gray-700 border-none">
        <div className="grid gap-4">
          {theme == "dark" ? (
            <label
              className="relative inline-flex items-center cursor-pointer"
              onClick={() => toggle("light")}
            >
              <input type="checkbox" className="sr-only peer" disabled />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-0.5 rtl:peer-checked:after:-translate-x-0.5 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-500"></div>
            </label>
          ) : (
            <label
              className="relative inline-flex items-center cursor-pointer"
              onClick={() => toggle("dark")}
            >
              <input
                type="checkbox"
                className="sr-only peer"
                disabled
                checked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeToggle;
