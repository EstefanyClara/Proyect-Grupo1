import React from "react";

const CheckBoxComponents = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked ? "Checked" : "Unchecked"}
    </label>
  );
};

export default CheckBoxComponents;
