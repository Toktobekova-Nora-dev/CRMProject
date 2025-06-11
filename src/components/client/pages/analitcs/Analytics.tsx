"use client";
import { useState } from "react";
import styles from "./Analytics.module.scss";

const doctors = ["Все врачи", "Айпери Исмаилова", "Елена Ивановна"];
const departments = [
  "Все отделения",
  "УЗИ",
  "Допплерография сосудов",
  "Рентген и КТ",
  "Терапия",
  "Неврология",
  "Окулист",
  "Велоэргометрия (ВЭМ)",
];
const periods = ["Ежедневно", "Еженедельно", "Ежемесячно"];

const mockData = [
  {
    id: 1,
    date: "08.10.2025",
    patient: "Канатбек Аскеров",
    service: "УЗИ печени",
    type: "Наличные",
    payment: "1,000 c",
    discountPrice: "1,000 с",
    doctorFee: "10%",
  },
  {
    id: 2,
    date: "08.10.2025",
    patient: "Канатбек Аскеров",
    service: "УЗИ печени",
    type: "Наличные",
    payment: "1,000 c",
    discountPrice: "1,000 с",
    doctorFee: "10%",
  },
  {
    id: 3,
    date: "08.10.2025",
    patient: "Канатбек Аскеров",
    service: "УЗИ печени",
    type: "Наличные",
    payment: "1,000 c",
    discountPrice: "1,000 с",
    doctorFee: "10%",
  },
];

const totalPrice = mockData.reduce(
  (acc, el) => acc + parseFloat(el.payment.replace(/[^0-9.-]+/g, "")),
  0
);
const totalDiscount = mockData.reduce(
  (acc, el) => acc + parseFloat(el.discountPrice.replace(/[^0-9.-]+/g, "")),
  0
);
const totalDoctorFee = mockData.reduce(
  (acc, el) => acc + parseFloat(el.doctorFee.replace(/[^0-9.-]+/g, "")),
  0
);

const Analytics = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("Все врачи");
  const [selectedDepartment, setSelectedDepartment] = useState("Все отделения");
  const [selectedPeriod, setSelectedPeriod] = useState("Ежедневно");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <section className={styles.Analytics}>
      <div className="container">
        <div className={styles.content}>
          <form className="flex flex-wrap gap-4">
            {/* Врачи */}
            <div>
              <select
                id="doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-52 p-2.5"
              >
                {doctors.map((doc, idx) => (
                  <option key={idx} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>
            </div>

            {/* Отделения */}
            <div>
              <select
                id="department"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-60 p-2.5"
              >
                {departments.map((dep, idx) => (
                  <option key={idx} value={dep}>
                    {dep}
                  </option>
                ))}
              </select>
            </div>

            {/* Период */}
            <div>
              <select
                id="period"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-40 p-2.5"
              >
                {periods.map((p, idx) => (
                  <option key={idx} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Дата */}
            <div>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-white border border-gray-300 text-gray-300 text-sm rounded-lg block w-9 p-2"
              />
            </div>
          </form>

          {/* Инфо врача */}
          <div className={styles.data_doctor}>
            <h2>Айпери Исмаилова</h2>
            <span>УЗИ</span>
          </div>

          {/* Таблица */}
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-[#2E2E2E] uppercase bg-[#F0F0FF]">
                <tr>
                  <th className="px-6 py-3">№</th>
                  <th className="px-6 py-3">Дата</th>
                  <th className="px-6 py-3">Пациент</th>
                  <th className="px-6 py-3">Услуга</th>
                  <th className="px-6 py-3">Тип</th>
                  <th className="px-6 py-3">Цены</th>
                  <th className="px-6 py-3">Со скидкой</th>
                  <th className="px-6 py-3">Врачу</th>
                </tr>
              </thead>

              <tbody>
                {mockData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="bg-white text-[#474747] border-gray-200"
                  >
                    <td className="px-6 py-4 font-medium border-r border-gray-300 text-[#888888]">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 border-r border-gray-300 text-[#888888]">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 border-r border-gray-300">
                      {item.patient}
                    </td>
                    <td className="px-6 py-4 border-r border-gray-300">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 border-r border-gray-300">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 border-r border-gray-300">
                      {item.payment}
                    </td>
                    <td className="px-6 py-4 border-r border-gray-300">
                      {item.discountPrice}
                    </td>
                    <td className="px-6 py-4">{item.doctorFee}</td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className="bg-[#F0F0FF] font-semibold text-gray-700">
                  <td colSpan={5} className="px-6 py-4 text-left">
                    Итого:
                  </td>
                  <td className="px-6 py-4 text-base">{totalPrice} c</td>
                  <td className="px-6 py-4 text-base">{totalDiscount} c</td>
                  <td className="px-6 py-4 text-base">{totalDoctorFee} c</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
