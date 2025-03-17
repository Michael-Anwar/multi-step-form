import styles from "./Input.module.css";

function Input({
  lable = "input",
  error = false,
  value,
  name,
  onchange,
  placeholder,
}) {
  return (
    <div className={styles.cloumn}>
      <div className={styles.row}>
        <label htmlFor={name}>{lable}</label>
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onchange(e)}
        placeholder={placeholder}
        className={error && styles.error}
      />
    </div>
  );
}

export default Input;
