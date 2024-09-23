import HowExplanationContent from "../components/HowExplanationContent";
import NameAnatomy from "../components/NameAnatomy";
import styles from "./Howitworks.module.css";

export default function Howitworks() {
  return (
    <section className={styles.section}>
      <NameAnatomy />
      <HowExplanationContent />
    </section>
  );
}
