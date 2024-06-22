import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';

const Calendar = () => {
    return (
        <div className="calendar-container">
            <h3>Calendar</h3>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                    { title: 'event 1', date: '2024-06-01' },
                    { title: 'event 2', date: '2024-06-02' }
                ]}
            />
        </div>
    );
};

export default Calendar;
