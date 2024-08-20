import styles from "./GenNameSection.module.css";

function GenNameSection() {
  return (
    <div>
      <h1 className={styles.title}>
        Create your <span className={styles.highlight}>realistic</span> <br />
        Ancient Roman <span className={styles.highlight}>name!</span>
      </h1>
    </div>
  );
}

export default GenNameSection;
