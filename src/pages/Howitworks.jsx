import HowExplanationContent from "../components/HowExplanationContent";
import NameAnatomy from "../components/NameAnatomy";
import PageNav from "../components/PageNav";
import styles from "./Howitworks.module.css";

export default function Howitworks() {
  return (
    <main className={styles.container}>
      <PageNav />

      <section className={styles.contentBox}>
        <NameAnatomy />
        <HowExplanationContent />
      </section>
    </main>
  );
}
