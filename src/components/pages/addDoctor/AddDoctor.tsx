import React from "react";
import style from "./AddDoctor.module.scss";

const AddDoctor = () => {
  return (
    <section className={style.addDoctor}>
      <div className="container">
        <div className={style.addDoctor__form}>
          <h1>Добавить врача</h1>
          <form>
            <div className={style.form__group}>
              <label htmlFor="name">Имя врача</label>
              <input type="text" id="name" placeholder="Введите имя врача" />
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
              <label htmlFor="room">Кабинет</label>
              <input
                type="text"
                id="room"
                placeholder="Введите номер кабинета"
              />
            </div>
            <div className={style.form__group}>
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                placeholder="Введите телефон врача"
              />
            </div>
            <button type="submit">Добавить врача</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
