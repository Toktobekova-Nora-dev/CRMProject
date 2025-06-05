"use client";
import React, { useState } from "react";
import style from "./AddDoctor.module.scss";

const AddDoctor = () => {
  return (
    <section className={style.addDoctor}>
      <div className={style.container}>
        <div className={style.addDoctor__form}>
          <h1 className={style.addDoctor__title}>Добавить врача</h1>
          <form className={style.form}>
            <div className={style.form__group}>
              <label htmlFor="name">ФИО</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Введите имя врача"
                required
              />
            </div>
            <div className={style.form__group}>
              <label htmlFor="photo">Фото</label>
              <input type="file" id="photo" name="photo" />
            </div>
            <div className={style.form__group}>
              <label htmlFor="department">Отделение</label>
              <select id="department" name="department" required>
                <option value="">Выберите отделение</option>
                <option value="cardiology">Кардиология</option>
                <option value="neurology">Неврология</option>
                <option value="pediatrics">Педиатрия</option>
              </select>
            </div>
            <div className={style.form__group}>
              <label htmlFor="position">Должность</label>
              <select id="position" name="position" required>
                <option value="">Выберите должность</option>
                <option value="head">Заведующий</option>
                <option value="doctor">Врач</option>
                <option value="intern">Интерн</option>
              </select>
            </div>
            <div className={style.form__group}>
              <label htmlFor="phone">Контакты</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Введите телефон врача"
                required
              />
            </div>
            <div className={style.form__group}>
              <label htmlFor="email">Эл. почта</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Введите email врача"
                required
              />
            </div>
            <button type="submit" className={style.form__submit}>
              Добавить врача
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
