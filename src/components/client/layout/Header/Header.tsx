import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { Bell, ChevronRight, Folder } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const analytics = pathname === "/analytics";

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <ChevronRight className={styles.arrow} />
          <div></div>
          <div className={styles.right}>
            {analytics ? (
              <div className={styles.analytics}>
                <Folder />
                <Link href="/analytics/report">Отчеты</Link>
              </div>
            ) : null}
            <Bell size={30} className={styles.bell} />
            <div className={styles.line}></div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocErq1QEBqh8nni6H9Kfxa9teMfXSpg0jzQ&s"
              alt="User Avatar"
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
