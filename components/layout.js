import styles from "../styles/layout.module.scss";
import Footer from "./footer";
import SideBar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <SideBar />
      <div className={styles.page}>
        <main className={styles.container}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
