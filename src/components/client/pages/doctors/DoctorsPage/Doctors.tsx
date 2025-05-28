"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosMore } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Pencil, Trash2 } from "lucide-react";
import styles from "./Doctors.module.scss";
import "./Doctors.module.scss";

const doctorsList = [
  {
    id: 1,
    name: "Елена Ивановна",
    room: "№ 1",
    department: "Кардиология",
    phone: "0700081882",
  },
  {
    id: 2,
    name: "Елена Ивановна",
    room: "№ 2",
    department: "Кардиология",
    phone: "0700081882",
  },
  {
    id: 3,
    name: "Елена Ивановна",
    room: "№ 9",
    department: "Кардиология",
    phone: "0700081882",
  },
  {
    id: 4,
    name: "Елена Ивановна",
    room: "№ 9",
    department: "Кардиология",
    phone: "0700081882",
  },
  {
    id: 5,
    name: "Елена Ивановна",
    room: "№ 9",
    department: "Кардиология",
    phone: "0700081882",
  },
  {
    id: 6,
    name: "Елена Ивановна",
    room: "№ 9",
    department: "Кардиология",
    phone: "0700081882",
  },
  {
    id: 7,
    name: "Елена Ивановна",
    room: "№ 9",
    department: "Кардиология",
    phone: "0700081882",
  },
  {
    id: 8,
    name: "Елена Ивановна",
    room: "№ 9",
    department: "Кардиология",
    phone: "0700081882",
  },
  {
    id: 9,
    name: "Елена Ивановна",
    room: "№ 9",
    department: "Кардиология",
    phone: "0700081882",
  },
  {
    id: 10,
    name: "Елена Ивановна",
    room: "№ 9",
    department: "Кардиология",
    phone: "0700081882",
  },
];

const Doctors = () => {
  const router = useRouter();
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleAddDoctor = () => router.push("/doctors/addDoctor");

  const handleToggleMenu = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
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
          {doctorsList.map((doctor) => (
            <div key={doctor.id} className={styles.list__item}>
              <h3>
                Специалист: <span>{doctor.name}</span>
              </h3>
              <h3>
                Кабинет: <span>{doctor.room}</span>
              </h3>
              <h3>
                Отделение: <span>{doctor.department}</span>
              </h3>
              <h3>
                Телефон: <span>{doctor.phone}</span>
              </h3>
              <div className={styles.more}>
                <IoIosMore
                  onClick={() => handleToggleMenu(doctor.id)}
                  className={styles.moreIcon}
                />
                <div
                  className={styles.actions}
                  style={{ display: activeId === doctor.id ? "flex" : "none" }}
                >
                  <div className={styles.edit} onClick={() => router.push('/doctors/editDoctor')
                  }>
                    <Pencil className={styles.editIcon} />
                    <span>Редактировать</span>
                  </div>
                  <div className={styles.delete}>
                    <Trash2 className={styles.deleteIcon} />
                    <span>Удалить врача</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
