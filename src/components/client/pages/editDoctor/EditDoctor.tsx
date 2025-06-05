import React from "react";
import styles from "./EditDoctor.module.scss";
import user from "../../../../../public/user.svg";
import Image from "next/image";

const EditDoctor = () => {
  return (
    <section className={styles.editDoctor}>
      <div className={styles.container}>
        <div className={styles.editDoctorContent}>
          <Image src={user} alt="logo" width={150}/>
          <label htmlFor="doctorName">Имя врача</label>
          <input id="doctorName" type="text" defaultValue="Канатбек Аскеров" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" defaultValue="kanatbek@example.com" />

          <label htmlFor="contacts">Контакты</label>
          <input id="contacts" type="text" defaultValue="+996 700 000 000" />

          <label htmlFor="department">Отделение</label>
          <select id="department">
            <option value="cardiology">Кардиология</option>
            <option value="neurology">Неврология</option>
            <option value="pediatrics">Педиатрия</option>
          </select>

          <label htmlFor="position">Должность</label>
          <select id="position">
            <option value="senior">Старший врач</option>
            <option value="junior">Младший врач</option>
            <option value="intern">Интерн</option>
          </select>

          <label htmlFor="bonus">Введите бонус в процентах</label>
          <input id="bonus" type="number" defaultValue={10} />
          <button className={styles.submit} type="submit">Сохранить</button>
        </div>
      </div>
    </section>
  );
};

export default EditDoctor;
