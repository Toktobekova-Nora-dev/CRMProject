import React from "react";
import styles from "./EditDoctor.module.scss";
import user from "../../../../../public/img/user.svg";
import last_user from "../../../../../public/user.svg";
import Image from "next/image";

const EditDoctor = () => {
  return (
    <section className={styles.editDoctor}>
      <div className={styles.container}>
        <div className={styles.editDoctorContent}>
          <Image src={user} alt="logo" width={90} height={90} />
          <Image src={last_user} alt="logo" width={150} />
          <label htmlFor="doctorName">Имя врача</label>
          <input id="doctorName" type="text" defaultValue="Канатбек Аскеров" />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" defaultValue="kanatbek@example.com" />
          <label htmlFor="contacts">Контакты</label>
          <input id="contacts" type="text" defaultValue="+996 700 000 000" />
          <label htmlFor="department">Отделение</label>
          <select id="department">
            <option value="cardiology">Стомотолог</option>
            <option value="neurology">Неврология</option>
            <option value="pediatrics">Педиатрия</option>
          </select>
          <label htmlFor="position">Должность</label>
          <select id="position">
            <option value="senior">Стомотолог</option>
            <option value="junior">Стомотолог</option>
            <option value="intern">Стомотолог</option>
          </select>
          <label htmlFor="bonus">Введите бонус в процентах</label>
          <input id="bonus" type="number" defaultValue={10} />
          <button>Сохранить</button>
          <button className={styles.submit} type="submit">
            Сохранить
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditDoctor;
