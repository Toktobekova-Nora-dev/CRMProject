"use client";
import React, { useState } from "react";
import style from "./AddDoctor.module.scss";

const AddDoctor = () => {
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    photo: null,
    department: "",
    position: "",
    phone: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const { name, value } = target;
    if (
      target instanceof HTMLInputElement &&
      target.type === "file" &&
      target.files &&
      target.files.length > 0
    ) {
      const file = target.files[0];
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
      setFile(file.name);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <section className={style.addDoctor}>
      <div className={style.container}>
        <div className={style.addDoctor__form}>
          <h1 className={style.addDoctor__title}>Добавить врача</h1>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.form__group}>
              <label htmlFor="name">ФИО</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Введите имя врача"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={style.form__group}>
              <label htmlFor="photo">Фото</label>
              <input type="file" id="photo" name="photo" />
            </div>
            <div className={style.form__group}>
              <label htmlFor="department">Отделение</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Выберите отделение</option>
                <option value="cardiology">Кардиология</option>
                <option value="neurology">Неврология</option>
                <option value="pediatrics">Педиатрия</option>
              </select>
            </div>
            <div className={style.form__group}>
              <label htmlFor="position">Должность</label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              >
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
