import PageNav from "../components/PageNav";
import GenNameSection from "../components/GenNameSection";
import Sidebar from "../components/Sidebar";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <GenNameSection />
        <Sidebar />
      </section>
    </main>
  );
}
