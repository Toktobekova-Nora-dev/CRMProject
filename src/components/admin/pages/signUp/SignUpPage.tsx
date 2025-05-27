"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import scss from "./SignUpPage.module.scss";

type FormData = {
  fullName: string;
  specialty?: string;
  license?: string;
  email: string;
  phone: string;
  password: string;
  role: string;
};

const SignUpPage = () => {
  const [role, setRole] = useState("Администратор");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
  };

  return (
    <div className={scss.wrapper}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.former}>
            <h1>Войти в систему</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>ФИО</p>
              <input
                type="text"
                placeholder="Введите ФИО"
                {...register("fullName", { required: "ФИО обязательно" })}
              />
              {errors.fullName && <span>{errors.fullName.message}</span>}

              {role === "Врач" && (
                <>
                  <p>Специальность</p>
                  <input
                    type="text"
                    placeholder="Специальность"
                    {...register("specialty", {
                      required: "Укажите специальность",
                    })}
                  />
                  {errors.specialty && <span>{errors.specialty.message}</span>}

                  <p>Медицинская лицензия</p>
                  <input
                    type="text"
                    placeholder="Медицинская лицензия"
                    {...register("license", { required: "Укажите лицензию" })}
                  />
                  {errors.license && <span>{errors.license.message}</span>}
                </>
              )}

              <p>Email</p>
              <input
                type="email"
                placeholder="Введите свою почту"
                {...register("email", {
                  required: "Email обязателен",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Неверный формат email",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}

              <p>Телефон номер</p>
              <input
                type="tel"
                placeholder="Введите свой номер"
                {...register("phone", { required: "Телефон обязателен" })}
              />
              {errors.phone && <span>{errors.phone.message}</span>}

              <p>Пароль</p>
              <input
                type="password"
                placeholder="Придумайте пароль"
                {...register("password", {
                  required: "Пароль обязателен",
                  minLength: { value: 6, message: "Минимум 6 символов" },
                })}
              />
              {errors.password && <span>{errors.password.message}</span>}

              <p>Выберите роль</p>
              <div className={scss.roles}>
                <label>
                  <input
                    type="radio"
                    value="Администратор"
                    {...register("role")}
                    checked={role === "Администратор"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Администратор
                </label>
                <label>
                  <input
                    type="radio"
                    value="Врач"
                    {...register("role")}
                    checked={role === "Врач"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Врач
                </label>
                <label>
                  <input
                    type="radio"
                    value="Ресепшн"
                    {...register("role")}
                    checked={role === "Ресепшн"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Ресепшн
                </label>
              </div>

              <button type="submit">
                {role === "Врач" ? "Регистрация" : "Войти"}
              </button>
            </form>
          </div>

          <div className={scss.bgkImage}>
            <h1>Добро пожаловать!</h1>
            <p>
              Присоединяйтесь к нашей CRM для медицинского центра!
              <br />
              Оптимизируйте работу, следите за расписанием и
              <br />
              обеспечивайте лучший сервис пациентам.
            </p>
            <button type="button">РЕГИСТРАЦИЯ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
