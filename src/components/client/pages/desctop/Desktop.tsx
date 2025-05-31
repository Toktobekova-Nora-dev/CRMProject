"use client";
import React, { useReducer, useState } from "react";
import scss from "./Desktop.module.scss";
import { Pen, Search, Trash } from "lucide-react";
import { IoMdAdd } from "react-icons/io";
import { useParams, useRouter } from "next/navigation";

const obj = [
  {
    date: "Март 20, 12:09",
    pation: "Иванов Иван",
    nuts: "Смирнова Елена",
    pay: "Наличные",
    som: "5000",
    id: 1,
  },
  {
    date: "Март 20, 12:09",
    pation: "Иванов Иван",
    nuts: "Смирнова Елена",
    pay: "Наличные",
    som: "5000",
    id: 2,
  },
];

const Desktop = () => {
  const [modalId, setModalId] = useState<number | null>(null);
  const router = useRouter();
  return (
    <div className={scss.wrapper}>
      <div className={scss.header}>
        <h1>Все записи клиентов</h1>
        <button className={scss.addButton}>
          <IoMdAdd size={18} />
          Добавить пациента
        </button>
      </div>

      <div className={scss.filters}>
        <div className={scss.searchBox}>
          <Search className={scss.searchIcon} size={16} />
          <input type="text" placeholder="Поиск" />
        </div>

        <select>
          <option>Март 20 , 2025</option>
          <option>Март 21 , 2025</option>
        </select>

        <select>
          <option>Врач: Елена</option>
          <option>Врач: Дмитрий</option>
        </select>
      </div>

      <div className={scss.table}>
        <div className={scss.tableHeader}>
          <div>Дата и время</div>
          <div>Пациент</div>
          <div>Врач</div>
          <div>Способ оплаты</div>
          <div>Сумма оплаты</div>
          <div></div>
        </div>

        {obj.map((el) => (
          <div key={el.id} className={scss.tableRow}>
            <div>{el.date}</div>
            <div>{el.pation}</div>
            <div>{el.nuts}</div>
            <div>
              <span className={scss.dot + " " + scss.green}></span>
              {el.pay}
            </div>
            <div>{el.som}</div>
            <div
              onClick={() => setModalId(modalId === el.id ? null : el.id)}
              className={scss.more}
            >
              ⋮
            </div>
            {modalId === el.id && (
              <div style={{ display: "flex" }} className={scss.editPart}>
                <div className={scss.boxer}>
                  <Pen className={scss.ion_icon} />
                  <p onClick={() => router.push(`/detail/${el.id}`)}>
                    Редактировать
                  </p>
                </div>
                <div className={scss.boxer}>
                  <Trash className={scss.ion_icon} />
                  <p>Удалить пациента</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktop;
