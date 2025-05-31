"use client";

import React, { useState } from "react";
import scss from "./SignUpPage.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  fullName: string;
  specialty?: string;
  license?: string;
  email: string;
  phone: string;
  password: string;
  select: string;
};

const SignUpPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  console.log(errors);

  const [select, useSelect] = useState("Администратор");
  console.log(select);

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.sining}>
          <h1>Войти в систему</h1>
          <form>
            <p>ФИО</p>
            <input
              type="text"
              placeholder="Введите ФИО"
              {...register("fullName", {
                required: "ФИО обязательно",
                minLength: {
                  value: 8,
                  message: "ФИО должно содержать минимум 8 символов",
                },
              })}
            />
            {errors.fullName && <span>{errors.fullName.message}</span>}
            {select === "Врач" && (
              <div>
                <p>Специальность</p>
                <input
                  type="text"
                  placeholder="Специальность"
                  {...register("specialty", {
                    required: "Укажите специальность",
                    minLength: {
                      value: 4,
                      message:
                        "Специальность должна содержать минимум 4 символа",
                    },
                  })}
                />
                {errors.specialty && <span>{errors.specialty.message}</span>}
                <p>Медицинская лицензия</p>
                <input
                  type="text"
                  placeholder="Специальность"
                  {...register("license", {
                    required: "Укажите лицензию",
                    minLength: { value: 7, message: "Укажите лицензию" },
                  })}
                />
                {errors.license && <span>{errors.license.message}</span>}
              </div>
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
            <p>Телефон</p>
            <input
              type="text"
              placeholder="Введите свой номер"
              {...register("phone", {
                required: "Введите свой номер",
                minLength: {
                  value: 7,
                  message: "Номер должен содержать минимум 7 цифр",
                },
              })}
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
            <div className={scss.role}>
              <div className={scss.select}>
                <input
                  type="radio"
                  value={"Администратор"}
                  {...register("select")}
                  checked={select === "Администратор"}
                  onChange={(e) => useSelect(e.target.value)}
                />
                <p>Администратор</p>
              </div>
              <div className={scss.select}>
                <input
                  type="radio"
                  value={"Врач"}
                  {...register("select")}
                  checked={select === "Врач"}
                  onChange={(e) => useSelect(e.target.value)}
                />
                <p>Врач</p>
              </div>
              <div className={scss.select}>
                <input
                  type="radio"
                  value={"Ресепшн"}
                  {...register("select")}
                  checked={select === "Ресепшн"}
                  onChange={(e) => useSelect(e.target.value)}
                />
                <p>Ресепшн</p>
              </div>
            </div>
            <button type="submit">
              {select === "Врач" ? "Регистрация" : "Войти"}
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
  );
};

export default SignUpPage;
