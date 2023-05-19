import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
export default function MyCalendar() {
    const [date, setDate] = useState(new Date())
  return (
    <div className="calendar-container">
        <Calendar onChange={setDate} value={date}/>
        <div className="text-center">
        Selected date: {date.toDateString()}
    </div>
   </div>
  )
}
