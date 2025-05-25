import { useState } from "react";
import { Icon } from "@iconify/react";
import css from "../Filter/Filter.module.css";

const SelectFilter = ({
  label,
  name,
  value,
  options,
  onChange,
  id,
  placeholder = name === "brand" ? "Choose a brand" : "Choose a price",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    onChange(e);
    setIsOpen(false);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.labelWrap}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <div className={css.selectWrapper}>
        <select
          name={name}
          value={value || ""}
          onChange={handleChange}
          onClick={handleToggle}
          onBlur={handleBlur}
          className={name === "brand" ? css.checkBrand : css.checkPrice}
          id={id}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Icon
          icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
          className={css.selectIcon}
        />
      </div>
    </div>
  );
};

export default SelectFilter;
