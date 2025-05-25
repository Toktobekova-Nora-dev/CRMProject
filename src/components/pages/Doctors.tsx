import React from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosMore } from "react-icons/io";
import styles from "./Doctors.module.scss";
import { CiSearch } from "react-icons/ci";

const Doctors = () => {
  const router = useRouter();

  const handleAddDoctor = () => {
    router.push("/AddDoctor");
  };

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
            <a>
              <IoIosMore />
            </a>
          </div>
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
            <IoIosMore />
          </div>
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
            <IoIosMore />
          </div>
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
            <a>
              <IoIosMore />
            </a>
          </div>
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
            <IoIosMore />
          </div>
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
            <IoIosMore />
          </div>
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
            <a>
              <IoIosMore />
            </a>
          </div>
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
            <IoIosMore />
          </div>
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
            <IoIosMore />
          </div>
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
            <a>
              <IoIosMore />
            </a>
          </div>
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
            <IoIosMore />
          </div>
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
            <IoIosMore />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
