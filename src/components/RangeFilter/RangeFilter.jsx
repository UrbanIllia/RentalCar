import css from "../Filter/Filter.module.css";

const RangeFilter = ({
  label,
  minName,
  maxName,
  minValue,
  maxValue,
  onChange,
  id,
}) => {
  return (
    <div className={css.labelWrap}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <div className={css.iputWrap}>
        <input
          type="number"
          name={minName}
          value={minValue}
          onChange={onChange}
          placeholder="From"
          className={css.inputFrom}
          id={id}
        />

        <input
          type="number"
          name={maxName}
          value={maxValue}
          onChange={onChange}
          placeholder="To"
          className={css.inputTo}
          id={id}
        />
      </div>
    </div>
  );
};

export default RangeFilter;
