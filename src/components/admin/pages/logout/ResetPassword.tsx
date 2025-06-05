"use client";

import { useForm } from "react-hook-form";
import styles from "./ResetPassword.module.scss";

type FormData = {
  email: string;
};

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Восстановление пароля:", data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Добро пожаловать!</h2>
        <p>
          Войдите в систему, чтобы управлять записями,
          <br /> пациентами и процессами клиники легко и удобно.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1>Восстановление пароля!</h1>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>

        <div className={styles.inputWrapper}>
          <span className={styles.icon}>✉️</span>
          <input
            id="email"
            type="email"
            placeholder="Введите свою почту"
            {...register("email", {
              required: "Поле обязательно",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Некорректный email",
              },
            })}
            className={`${styles.input} ${
              errors.email ? styles.inputError : ""
            }`}
          />
        </div>

        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <p className={styles.info}>
          На указанную электронную почту придёт письмо с ссылкой по
          восстановлению пароля
        </p>

        <button type="submit" className={styles.button}>
          Сбросить пароль
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
