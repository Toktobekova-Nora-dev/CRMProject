"use client";
import { PieChart, TrendingDown, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Analytics = () => {
  const chartData = [
    { name: "Фев 20", allRecords: 100, cancelled: 3800 },
    { name: "Фев 21", allRecords: 2800, cancelled: 2200 },
    { name: "Фев 22", allRecords: 1000, cancelled: 1800 },
    { name: "Фев 23", allRecords: 4000, cancelled: 2400 },
    { name: "Фев 24", allRecords: 3200, cancelled: 2200 },
    { name: "Фев 25", allRecords: 3600, cancelled: 2000 },
    { name: "Фев 26", allRecords: 3400, cancelled: 2000 },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Growth Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">Рост</p>
                <h3 className="text-3xl font-bold text-gray-900">89%</h3>
              </div>
            </div>
            <select className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>ежемесячно</option>
              <option>ежедневно</option>
              <option>ежегодно</option>
            </select>
          </div>

          {/* Decline Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                <TrendingDown className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">
                  Падение
                </p>
                <h3 className="text-3xl font-bold text-gray-900">-11%</h3>
              </div>
            </div>
            <select className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>ежемесячно</option>
              <option>ежедневно</option>
              <option>ежегодно</option>
            </select>
          </div>

          {/* Doctors Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
              <PieChart className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Врачей</p>
              <h3 className="text-3xl font-bold text-gray-900">365</h3>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Статистика записи на прием
            </h2>
            <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>еженедельно</option>
              <option>ежедневно</option>
              <option>ежемесячно</option>
              <option>ежегодно</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Left Stats */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <p className="text-gray-500 text-sm mb-2">За Неделю</p>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  45,900{" "}
                  <span className="text-lg font-normal text-gray-500">
                    клиентов
                  </span>
                </h3>
              </div>

              <div className="space-y-3">
                <div className=" bg-gray-50 rounded-lg px-5 py-4">
                  <span className="font-semibold text-gray-900">45%</span>
                  <span className="text-gray-600 ml-2">первичные пациенты</span>
                </div>
                <div className="bg-gray-50 rounded-lg px-5 py-4">
                  <span className="font-semibold text-gray-900">55%</span>
                  <span className="text-gray-600 ml-2">повторные пациенты</span>
                </div>
              </div>
              <div className="flex absolute bottom-0 gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-600">Все записи</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-gray-600">
                    Отмененные записи
                  </span>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="lg:col-span-2 relative">
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#9CA3AF" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#9CA3AF" }}
                      tickFormatter={(value) => `${value / 1000}K`}
                    />
                    <Line
                      type="monotone"
                      dataKey="allRecords"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, fill: "#3B82F6" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="cancelled"
                      stroke="#F97316"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, fill: "#F97316" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="absolute top-8 right-8">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  220
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
