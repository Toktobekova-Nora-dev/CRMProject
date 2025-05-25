"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
import { Home, BarChart2, User, CalendarDays, FileText } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path ? styles.active : styles.linkItem;

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>CRM - MED</div>

      <nav className={styles.nav}>
        <ul className={styles.menuList}>
          <li className={linkClass("/")}>
            <Link href="/">
              <Home size={18} /> <span>Рабочий стол</span>
            </Link>
          </li>
          <li className={linkClass("/analytics")}>
            <Link href="/analytics">
              <BarChart2 size={18} /> <span>Аналитика</span>
            </Link>
          </li>
          <li className={linkClass("/doctorRecords")}>
            <Link href="/doctorRecords">
              <User size={18} /> <span>Записи врачей</span>
            </Link>
          </li>
          <li className={linkClass("/doctorRecords")}>
            <Link href="/doctors">
              <User size={18} /> <span>Список врачей</span>
            </Link>
          </li>
          <li className={linkClass("/calendar")}>
            <Link href="/calendar">
              <CalendarDays size={18} /> <span>Управление календарем</span>
            </Link>
          </li>
          <li className={linkClass("/priceList")}>
            <Link href="/priceList">
              <FileText size={18} /> <span>Прайс лист</span>
            </Link>
          </li>
        </ul>
        <div className={styles.footer}>
          <Link href="/profile">Мой профиль</Link>
          <Link href="/logout">Выйти</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
