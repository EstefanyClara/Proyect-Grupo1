import React from "react";

const CheckBoxComponents = ({checkBoxLabel}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
    <label >{checkBoxLabel}</label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked ? "Checked" : "Unchecked"}
    </>
  );
};

export default CheckBoxComponents;
