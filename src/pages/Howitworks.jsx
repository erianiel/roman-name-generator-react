import HowExplanationContent from "../components/HowExplanationContent";
import NameAnatomy from "../components/NameAnatomy";
import PageNav from "../components/PageNav";
import styles from "./Howitworks.module.css";

export default function Howitworks() {
  return (
    <section className={styles.container}>
      <PageNav />

      <div className={styles.contentBox}>
        <NameAnatomy />
        <HowExplanationContent />
      </div>
    </section>
  );
}
