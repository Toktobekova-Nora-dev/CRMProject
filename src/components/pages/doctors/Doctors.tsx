"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosMore } from "react-icons/io";
import styles from "./Doctors.module.scss";
import { CiSearch } from "react-icons/ci";
import { Pencil, Trash2 } from "lucide-react";

const Doctors = () => {
  const [click, setClick] = useState(false);
  const router = useRouter();

  const handleAddDoctor = () => {
    router.push("/addDoctor");
  };

  const handleEditDoctor = () => {
    router.push(`/editDoctor`);
    console.log("hello");
  };

  function handleClick() {
    setClick((prevClick) => !prevClick);
  }

  return (
    <section className={styles.doctors}>
      <div className="container">
        <div className={styles.head_doctor}>
          <div className={styles.back}>
            <a>
              <IoIosArrowBack />
            </a>
            <h1>Список врачей</h1>
          </div>
          <div className={styles.search}>
            <a>
              <CiSearch />
            </a>
            <input type="text" placeholder="Поиск" />
            <select>
              <option value="Отдел: УЗИ">Отдел: УЗИ</option>
            </select>
          </div>
          <button onClick={handleAddDoctor}>Добавить нового врача</button>
        </div>
        <hr />
        <div className={styles.doctor__list}>
          <div className={styles.list__item}>
            <h3>
              Специалист: <span>Елена Ивановна</span>
            </h3>
            <h3>
              Кабинет: <span>№ 9</span>
            </h3>
            <h3>
              Отделение: <span>Кардиология</span>
            </h3>
            <h3>
              Телефон: <span>0700081882</span>
            </h3>
            <div className={styles.more}>
              <IoIosMore onClick={handleClick} className={styles.moreIcon} />
              <div
                className={styles.actions}
                style={click ? { opacity: 1 } : { opacity: 0 }}
              >
                <div className={styles.edit} onClick={handleEditDoctor}>
                  <Pencil className={styles.editIcon} />
                  <span>Редактировать</span>
                </div>
                <div className={styles.delete}>
                  <Trash2 />
                  <span>Удалить врача</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
