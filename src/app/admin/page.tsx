import React from "react";
import scss from "./page.module.scss";
import Link from "next/link";

const page = () => {
  return (
    <div className={scss.content}>
      <h1>Oнлайн CRM система</h1>
      <p>Для учета клиентов и сделок</p>
      <Link href="/admin/signIn" className={scss.button}>
        Войти
      </Link>
    </div>
  );
};

export default page;
