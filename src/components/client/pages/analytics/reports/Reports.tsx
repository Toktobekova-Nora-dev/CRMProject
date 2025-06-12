"use client";
import { useEffect, useState } from "react";
import styles from "./Reports.module.scss";
import axios from "axios";

interface RecordItem {
  id: number;
  created_date: string;
  doctor: string | null;
  department: string | null;
  patient: string | null;
  service: string | null;
  payment_type: string;
  price: number;
  discount: number;
  bonus: number | null;
}

interface Totals {
  total_count: number;
  total_price: number;
  total_discount: number;
  cash_sum: number;
  card_sum: number;
  total_doctor_income: number;
}

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

const Reports = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>("Все врачи");
  const [selectedDepartment, setSelectedDepartment] =
    useState<string>("Все отделения");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Ежедневно");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const [records, setRecords] = useState<RecordItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totals, setTotals] = useState<Totals>({
    total_count: 0,
    total_price: 0,
    total_discount: 0,
    cash_sum: 0,
    card_sum: 0,
    total_doctor_income: 0,
  });

  async function getRecords(
    doctor: string,
    department: string,
    period: string,
    date: string
  ): Promise<{
    total_count: number;
    total_price: number;
    total_discount: number;
    cash_sum: number;
    card_sum: number;
    total_doctor_income: number;
    records: RecordItem[];
  } | null> {
    try {
      const res = await axios.get("http://13.60.242.78/ru/detailed_record/", {
        params: {
          doctor,
          department,
          period,
          date,
        },
      });
      return res.data;
    } catch (error) {
      console.error("Ката чыкты:", error);
      return null;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getRecords(
        selectedDoctor,
        selectedDepartment,
        selectedPeriod,
        selectedDate
      );
      if (data) {
        setRecords(data.records || []);
        setTotals({
          total_count: data.total_count || 0,
          total_price: data.total_price || 0,
          total_discount: data.total_discount || 0,
          cash_sum: data.cash_sum || 0,
          card_sum: data.card_sum || 0,
          total_doctor_income: data.total_doctor_income || 0,
        });
      } else {
        setRecords([]);
        setTotals({
          total_count: 0,
          total_price: 0,
          total_discount: 0,
          cash_sum: 0,
          card_sum: 0,
          total_doctor_income: 0,
        });
      }
      setLoading(false);
    };

    if (selectedDate) fetchData();
  }, [selectedDoctor, selectedDepartment, selectedPeriod, selectedDate]);

  return (
    <section className={styles.Analytics}>
      <div className="container">
        <div className={styles.content}>
          <form className="flex flex-wrap gap-4">
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
            <div>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-36 p-2"
              />
            </div>
          </form>

          <div className={styles.data_doctor}>
            <h2>{selectedDoctor}</h2>
            <span>{selectedDepartment}</span>
          </div>

          {loading ? (
            <p className="text-center text-gray-600 mt-6">Жүктөлүүдө...</p>
          ) : (
            <div className="relative overflow-x-auto">
              <div className="overflow-hidden rounded-xl">
                <table className="w-full text-sm text-left text-gray-500 border-separate border-spacing-0">
                  <thead className="text-xs text-[#2E2E2E] uppercase bg-[#F0F0FF]">
                    <tr>
                      <th className="px-6 py-3 rounded-tl-xl">№</th>
                      <th className="px-6 py-3">Дата</th>
                      <th className="px-6 py-3">Пациент</th>
                      <th className="px-6 py-3">Услуга</th>
                      <th className="px-6 py-3">Тип</th>
                      <th className="px-6 py-3">Цены</th>
                      <th className="px-6 py-3">Со скидкой</th>
                      <th className="px-6 py-3 rounded-tr-xl">Врачу</th>
                    </tr>
                  </thead>

                  <tbody>
                    {records.map((item, index) => (
                      <tr
                        key={item.id || `record-${index}`}
                        className="bg-white text-[#474747]"
                      >
                        <td className="px-6 py-4 text-[#888888]">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-[#888888]">
                          {item.created_date
                            ? new Date(item.created_date).toLocaleDateString(
                                "ru-RU"
                              )
                            : "-"}
                        </td>
                        <td className="px-6 py-4">{item.patient ?? "-"}</td>
                        <td className="px-6 py-4">{item.service ?? "-"}</td>
                        <td className="px-6 py-4">
                          {item.payment_type === "cash"
                            ? "Наличные"
                            : item.payment_type === "card"
                            ? "Безналичные"
                            : "-"}
                        </td>
                        <td className="px-6 py-4">{item.price ?? 0} c</td>
                        <td className="px-6 py-4">
                          {(item.price ?? 0) - (item.discount ?? 0)} c
                        </td>
                        <td className="px-6 py-4">
                          {item.bonus ?? "-"} {item.bonus ? "с" : ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  <tfoot>
                    <tr className="bg-[#F0F0FF] font-semibold text-gray-700">
                      <td
                        colSpan={5}
                        className="px-6 py-4 text-left rounded-bl-xl"
                      >
                        Итого:
                      </td>
                      <td className="px-6 py-4 text-base">
                        {totals.total_price} c
                      </td>
                      <td className="px-6 py-4 text-base">
                        {totals.total_discount} c
                      </td>
                      <td className="px-6 py-4 text-base rounded-br-xl">
                        {totals.total_doctor_income} c
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className={styles.totals}>
                <h2>
                  Все записи <span>{totals.total_count}</span>
                </h2>
                <h2>
                  Общая сумма: <span>{totals.total_price} с</span>
                </h2>
                <div className={styles.method_payment}>
                  <h4>
                    Наличные: <span>{totals.cash_sum} с</span>
                  </h4>
                  <h4>
                    Безналичные: <span>{totals.card_sum} с</span>
                  </h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reports;
