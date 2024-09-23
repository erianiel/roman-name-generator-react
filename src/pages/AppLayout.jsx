import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <main className={styles.main}>
      <PageNav />
      <Outlet />
    </main>
  );
}

export default AppLayout;
