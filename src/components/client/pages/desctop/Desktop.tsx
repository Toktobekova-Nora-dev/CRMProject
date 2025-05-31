import React from "react";
import scss from "./Desktop.module.scss";
import { Search } from "lucide-react";
import { IoMdAdd } from "react-icons/io";

const Desktop = () => {
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

      {/* Здесь будет таблица */}
      <div className={scss.table}>
        <div className={scss.tableHeader}>
          <div>Дата и время</div>
          <div>Пациент</div>
          <div>Врач</div>
          <div>Способ оплаты</div>
          <div>Сумма оплаты</div>
          <div></div>
        </div>

        <div className={scss.tableRow}>
          <div>Март 20, 12:09</div>
          <div>Иванов Иван</div>
          <div>Смирнова Елена</div>
          <div>
            <span className={scss.dot + " " + scss.green}></span>
            Наличные
          </div>
          <div>5000с</div>
          <div className={scss.more}>⋮</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
