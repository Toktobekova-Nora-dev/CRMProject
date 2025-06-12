"use client";

import React, { useEffect, useState } from "react";
import {
  DateSelectArg,
  EventClickArg,
  EventApi,
  formatDate,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEvents = localStorage.getItem("events");
      if (savedEvents) {
        setCurrentEvents(JSON.parse(savedEvents));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("events", JSON.stringify(currentEvents));
    }
  }, [currentEvents]);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setSelectedDate(selectInfo);
    setIsDialogOpen(true);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (window.confirm(`Удалить событие '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && newEventTitle) {
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();

      calendarApi.addEvent({
        id: String(new Date().getTime()),
        title: newEventTitle,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
      });

      setNewEventTitle("");
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full px-4 lg:px-10 gap-6">
        {/* Список событий */}
        <div className="w-full lg:w-1/3">
          <div className="py-6 text-xl font-bold text-center lg:text-left">
            Calendar Events
          </div>
          <ul className="space-y-4">
            {currentEvents.length <= 0 && (
              <div className="italic text-center text-gray-400">No Events</div>
            )}

            {currentEvents.map((event: EventApi) => (
              <li
                key={event.id}
                className="border border-gray-200 shadow px-4 py-2 rounded-md text-blue-800"
              >
                {event.title}
                <br />
                <label className="text-gray-800 text-sm">
                  {formatDate(event.start!, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Календарь */}
        <div className="w-full lg:w-2/3">
          <FullCalendar
            height="auto"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={(e) => setCurrentEvents(e)}
            initialEvents={
              typeof window !== "undefined"
                ? JSON.parse(localStorage.getItem("events") || "[]")
                : []
            }
          />
        </div>
      </div>

      {/* Диалоговое окно добавления события */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg">
              Добавить новое событие
            </DialogTitle>
          </DialogHeader>
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleAddEvent}>
            <input
              type="text"
              placeholder="Название события"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              className="border px-3 py-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Добавить
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Calendar;
