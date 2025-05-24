import css from "../Filter/Filter.module.css";

const SelectFilter = ({ label, name, value, options, onChange, id }) => {
  return (
    <div className={css.labelWrap}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={name === "brand" ? css.checkBrand : css.checkPrice}
        id={id}
      >
        <option value="">
          Choose {name === "brand" ? "a brand" : "a price"}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
