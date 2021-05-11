const InputField = (props) => {
  return (
    <div>
      <label
        htmlFor="handle"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Codeforces username
      </label>
      <div className="mt-1">
        <input
          type="text"
          className="handle"
          id="handle"
          className="shadow-sm px-4 py-2 border focus:outline-none focus:ring-1 dark:text-gray-300 dark:bg-gray-600 focus:ring-purple-500 focus:border-purple-500 dark:focus:border-purple-600 dark:focus:ring-purple-600 flex-1 block w-full rounded-md sm:text-sm border-gray-300 dark:border-gray-500 "
          placeholder="iamsahebgiri"
          required
          {...props}
        />
      </div>
    </div>
  );
};

export default InputField;
