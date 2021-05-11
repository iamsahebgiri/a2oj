import Select from "./Select";

const SelectField = ({ label, data, selected, setSelected }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <Select data={data} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default SelectField;
