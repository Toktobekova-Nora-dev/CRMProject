import React from "react";
import style from "./AddDoctor.module.scss";

const AddDoctor = () => {
  return (
    <section className={style.addDoctor}>
      <div className="container">
        <div className={style.addDoctor__form}>
          <div className={style.addDoctor__title}>
          <h1>Добавить врача</h1>
            </div>
          <div className={style.form}>
            <div className={style.form__group}>
              <label htmlFor="name">ФИО</label>
              <input type="text" id="name" placeholder="Введите имя врача" />
            </div>
             <div className={style.form__group}>
              <label htmlFor="name">Фото</label>
              <input type="file" id="name" placeholder="Введите имя врача" />
            </div>
            <div className={style.form__group}>
              <label htmlFor="department">Отделение</label>
              <select id="department">
                <option value="cardiology">Кардиология</option>
                <option value="neurology">Неврология</option>
                <option value="pediatrics">Педиатрия</option>
              </select>
            </div>
            <div className={style.form__group}>
              <label htmlFor="department">Должность</label>
              <select id="department">
                <option value="cardiology">Кардиология</option>
                <option value="neurology">Неврология</option>
                <option value="pediatrics">Педиатрия</option>
              </select>
            </div>
            <div className={style.form__group}>
              <label htmlFor="phone">Контакты</label>
              <input
                type="tel"
                id="phone"
                placeholder="Введите телефон врача"
              />
            </div>
            <div className={style.form__group}>
              <label htmlFor="phone">Эл почта</label>
              <input
                type="tel"
                id="phone"
                placeholder="Введите телефон врача"
              />
            </div>
            <button type="submit">Добавить врача</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
