"use client";
import React, { useState } from "react";
import style from "./AddDoctor.module.scss";

const AddDoctor = () => {
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    // data.append("image", formData.photo);
    data.append("department", formData.department);
    data.append("job_title", formData.position);
    data.append("phone_number", formData.phone);
    data.append("email", formData.email);

    try {
      const response = await fetch("http://13.60.242.78/ru/doctor_create/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Серверден ката келди");
      }

      const result = await response.json();
      console.log("Врач ийгиликтүү кошулду:", result);
    } catch (error) {
      console.error("Ката болду:", error);
    }
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
                onChange={handleChange}
                required
              />
            </div>
            <div className={style.form__group}>
              <label htmlFor="photo">Фото</label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleChange}
              />
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
