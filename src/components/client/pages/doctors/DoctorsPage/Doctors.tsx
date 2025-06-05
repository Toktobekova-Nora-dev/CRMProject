"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosMore } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Pencil, Trash2 } from "lucide-react";
import styles from "./Doctors.module.scss";

interface Doctor {
  id: number;
  first_name: string;
  last_name: string;
  department_name: string;
  cabinet: string;
  phone_number: string;
}

const Doctors = () => {
  const router = useRouter();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleAddDoctor = () => router.push("/doctors/addDoctor");

  const handleToggleMenu = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://13.60.242.78/ru/doctor/");
        if (!response.ok) {
          throw new Error("Серверден врачтар тизмеси жүктөлгөн жок");
        }
        const data = await response.json();
        setDoctors(data);
      } catch (err: any) {
        setError(err.message || "Күтүлбөгөн ката кетти");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

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
              <option value="">Фильтр по отделению</option>
              {/* Динамик түрдө жүктөө кошсоң да болот */}
              <option value="УЗИ">УЗИ</option>
              <option value="Кардиология">Кардиология</option>
            </select>
          </div>
          <button onClick={handleAddDoctor}>Добавить нового врача</button>
        </div>
        <hr />

        {loading ? (
          <p>Жүктөлүүдө...</p>
        ) : error ? (
          <p style={{ color: "red" }}>Ката: {error}</p>
        ) : (
          <div className={styles.doctor__list}>
            {doctors.map((doctor) => (
              <div key={doctor.id} className={styles.list__item}>
                <h3>
                  Специалист:{" "}
                  <span>{`${doctor.last_name} ${doctor.first_name}`}</span>
                </h3>
                <h3>
                  Кабинет: <span>{doctor.cabinet}</span>
                </h3>
                <h3>
                  Отделение: <span>{doctor.department_name}</span>
                </h3>
                <h3>
                  Телефон: <span>{doctor.phone_number}</span>
                </h3>
                <div className={styles.more}>
                  <IoIosMore
                    onClick={() => handleToggleMenu(doctor.id)}
                    className={styles.moreIcon}
                  />
                  <div
                    className={styles.actions}
                    style={{
                      display: activeId === doctor.id ? "flex" : "none",
                    }}
                  >
                    <div
                      className={styles.edit}
                      onClick={() => router.push("/doctors/editDoctor")}
                    >
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
        )}
      </div>
    </section>
  );
};

export default Doctors;
