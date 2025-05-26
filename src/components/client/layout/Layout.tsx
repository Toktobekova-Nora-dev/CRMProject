import styles from "./Layout.module.scss";
import { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Header from "./Header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.right}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
