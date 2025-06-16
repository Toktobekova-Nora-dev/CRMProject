"use client";

import styles from "./Layout.module.scss";
import { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Header from "./Header/Header";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const hideHeader =
    pathname === "/doctors" || pathname === "/doctors/addDoctor";

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.right}>
        {!hideHeader && <Header />}
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
