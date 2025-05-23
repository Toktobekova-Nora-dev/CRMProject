import React from "react";
import { FiMail, FiLock } from "react-icons/fi";
import scss from "./SigninPage.module.scss";
import Link from "next/link";

const SigninPage = () => {
  return (
    <div className={scss.content}>
      <div className={scss.left}>
        <h1>Добро пожаловать!</h1>
        <p>
          Войдите в систему, чтобы управлять записями, <br />
          пациентами и процессами клиники легко и удобно.
        </p>
        <Link href={"/admin/signUp"}>
          <button className={scss.leftButton}>ВОЙТИ</button>
        </Link>
      </div>
      <div className={scss.right}>
        <h2>Войти в систему</h2>
        <form>
          <label>
            Email
            <div className={scss.inputGroup}>
              <FiMail />
              <input type="email" placeholder="Введите свою почту" />
            </div>
          </label>
          <label>
            Пароль
            <div className={scss.inputGroup}>
              <FiLock />
              <input type="password" placeholder="Введите свой пароль" />
            </div>
          </label>

          <button type="submit" className={scss.rightButton}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
