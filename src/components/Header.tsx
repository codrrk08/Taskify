import React from "react";
import old from "../assets/old.png";
import { useRef, useState, useEffect } from "react";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Header: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null); //to remove focus on enter

  const [theme, setTheme] = useState<String>("light"); //dark mode

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="dark:bg-black bg-whitesmoke max-xl:pr-20 max-xl:pt-20 max-sm:pr-8 max-sm:pt-8 lg:pr-20 lg:pt-20 text-2xl  flex justify-end">
        <span
          onClick={handleThemeSwitch}
          className="hover:shadow-md  hover:shadow-slate-400 transition duration-300 rounded-3xl cursor-pointer text-gray-500"
        >
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </span>
      </div>
      <div className="dark:bg-black bg-whitesmoke flex flex-col items-center gap-2  ">
        <div className="flex p-8 flex-col items-center gap-5  relative">
          {theme === "light" ? (
            <img src={old} alt="Logo" height="400" width="400" />
          ) : (
            <img src={old} alt="Logo" height="400" width="400" />
          )}

          <div className="">
            <form
              onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
              }}
            >
              <div className="flex items-center relative pt-10 pb-10">
                <input
                  ref={inputRef}
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  className="flex pl-3  focus:shadow focus:shadow-sm focus:dark:shadow-slate-300 focus:shadow-black rounded-3xl w-96 h-9 dark:bg-khaki/40 bg-grayfrench/30  focus:outline-none p-1 font-playpen font-bold text-md dark:text-white text-black"
                  type="input"
                  placeholder="Enter your tasks."
                />
                <button
                  type="submit"
                  className="h-7 w-7 flex
              right-1 rounded-2xl pl-2
               bg-buff text-xl font-playpen text-white dark:hover:shadow-slate-300 hover:shadow-black
                 hover:shadow-md hover:transition 
                 duration-75 absolute"
                >
                  +
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
