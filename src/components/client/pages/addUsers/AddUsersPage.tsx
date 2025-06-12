import React from "react";
import scss from "./AddUsersPage.module.scss";
import { ChevronLeft } from "lucide-react";

const AddUsersPage = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.topBar}>
        <p className={scss.backButton}>
          <ChevronLeft className={scss.icon} size={20} /> Рабочий стол
        </p>
        <h1 className={scss.title}>Добавить пациента</h1>
      </div>

      <form className={scss.formGrid}>
        <div className={scss.formGroup}>
          <label>ФИО</label>
          <input type="text" placeholder="Мария Ивановна" />
        </div>

        <div className={scss.formGroup}>
          <label>Дата рождения</label>
          <input type="date" defaultValue="2000-10-08" />
        </div>

        <div className={scss.formGroup}>
          <label>Пол</label>
          <select defaultValue="Женский">
            <option>Мужской</option>
            <option>Женский</option>
          </select>
        </div>

        <div className={scss.formGroup}>
          <label>Телефон номер</label>
          <div className={scss.phoneInput}>
            <select>
              <option>+996</option>
            </select>
            <input type="text" placeholder="550 941 433" />
          </div>
        </div>

        <div className={scss.formGroup}>
          <label>Отделение</label>
          <select defaultValue="Кардиология">
            <option>Кардиология</option>
            <option>Терапия</option>
            <option>Хирургия</option>
          </select>
        </div>

        <div className={scss.formGroup}>
          <label>Врач</label>
          <select defaultValue="Елена - 404 кабинет">
            <option>Елена - 404 кабинет</option>
            <option>Иван - 203 кабинет</option>
          </select>
        </div>

        <div className={scss.formGroup}>
          <label>Услуги врача</label>
          <select defaultValue="Консультация кардиолога">
            <option>Консультация кардиолога - 3400 с</option>
            <option>Стресс-ЭхоКГ - 5500 с</option>
            <option>Коронарография - 3700 с</option>
          </select>
        </div>

        <div className={scss.formGroup}>
          <label>Регистратор</label>
          <select defaultValue="Артем Исанов">
            <option>Артем Исанов</option>
          </select>
        </div>

        <div className={scss.formGroup}>
          <label>Статус пациента</label>
          <select className={scss.statusSelect}>
            <option className={scss.green}>Живая очередь</option>
            <option className={scss.blue}>Предзапись</option>
            <option className={scss.red}>Отмененные</option>
          </select>
        </div>

        <div className={scss.formGroup}>
          <label>Укажите время</label>
          <input type="text" placeholder="18:00 - 20:00" />
        </div>
      </form>

      <div className={scss.buttons}>
        <button className={scss.back}>Назад</button>
        <button className={scss.submit}>Далее</button>
      </div>
    </div>
  );
};

export default AddUsersPage;
