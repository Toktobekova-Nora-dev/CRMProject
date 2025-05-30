import styles from "./Header.module.scss";
import { Bell, ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <ChevronRight className={styles.arrow} />
          <div></div>
          <div className={styles.right}>
            <Bell size={30} className={styles.bell} />
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
