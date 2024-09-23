import GenNameSection from "../components/GenNameSection";
import Sidebar from "../components/Sidebar";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <section className={styles.section}>
      <GenNameSection />
      <Sidebar />
    </section>
  );
}
