import useDarkMode from "use-dark-mode";
import { HiMoon, HiSun } from "react-icons/hi";

const DarkModeFloatingButton = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  });
  return (
    <button
      className="bg-purple-600 dark:bg-purple-500 p-3 transform focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500 dark:focus-within:ring-offset-gray-800 transition ease-in-out duration-100 active:scale-90 rounded-full shadow-xl fixed bottom-0 right-0 mr-4 mb-4 md:mr-6 md:mb-6"
      onClick={darkMode.toggle}
    >
      {darkMode.value ? (
        <HiSun className="h-6 w-6 text-white" />
      ) : (
        <HiMoon className="h-6 w-6 text-white" />
      )}
    </button>
  );
};

export default DarkModeFloatingButton;