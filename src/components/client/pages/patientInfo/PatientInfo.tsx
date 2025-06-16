"use client";
import { FC } from "react";
import scss from "./PatientInfo.module.scss";
import Link from "next/link";

const PatientInfo: FC = () => {
  return (
    <section className={scss.patientInfo}>
      <div className="container">
        <h1>Информация о пациенте</h1>
        <div className={scss.content}>
          <h2>Урматбекова Айназик</h2>
          <div className={scss.btns}>
            <Link href="/records">
              <button>Запись на прием</button>
            </Link>
            <Link href="/historyOfRecords">
              <button>История записей</button>
            </Link>
            <Link href="/historyOfReceptions">
              <button>История приемов</button>
            </Link>
            <Link href="/payment">
              <button>Оплата</button>
            </Link>
            <Link href="/patientData">
              <button>Данные пациента</button>
            </Link>
          </div>
        </div>
        <form>
          <div>
            <div>
              <label>Регистратор</label> <br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="doctors">Врач</label> <br />
              <select name="doctors" id="doctors">
                <option value="Елена - 404 кабинет">Елена - 404 кабинет</option>
                <option value="Елена - 404 кабинет">Елена - 404 кабинет</option>
                <option value="Елена - 404 кабинет">Елена - 404 кабинет</option>
                <option value="Елена - 404 кабинет">Елена - 404 кабинет</option>
              </select>
            </div>
            <div>
              <label>Укажите время</label> <br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="status">Укажите статус пациента</label> <br />
              <select name="status" id="status">
                <option value="Живая очередь">Живая очередь</option>
                <option value="Предзапись">Предзапись</option>
                <option value="Отмененные">Отмененные</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="department">Отделение</label> <br />
              <select name="department" id="department">
                <option value="Кардиология">Кардиология</option>
                <option value="Стоматология">Стоматология</option>
                <option value="Невролгия">Невролгия</option>
              </select>
            </div>
            <div>
              <label htmlFor="doctor's services">Услуги врача</label> <br />
              <select name="doctor's services" id="doctor's services">
                <option value="Консультация кардиолога">
                  Консультация кардиолога
                </option>
                <option value="Стресс-ЭхоКГ">Стресс-ЭхоКГ</option>
                <option value="Коронарография">Коронарография</option>
              </select>
            </div>
          </div>
        </form>
        <div className={scss.double}>
          <button>Назад</button>
          <button>Далее</button>
        </div>
      </div>
    </section>
  );
};

export default PatientInfo;
