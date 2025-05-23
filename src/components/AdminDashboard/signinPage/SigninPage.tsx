import React from "react";
import scss from "./SignonPage.module.scss";
const SigninPage = () => {
  return (
    <div>
      <div className={scss.box}>
        <h1>Добро пожаловать!</h1>
        <p>
          Войдите в систему, чтобы управлять записями,
          <br /> пациентами и процессами клиники легко и удобно.
        </p>
        <button>ВОЙТИ</button>
      </div>
      <div>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
