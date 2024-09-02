import styles from "./Button.module.css";

function Button({ children, variant, type, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
