import React, { useState } from 'react';
import { format, addDays } from 'date-fns';

const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const isSameDay = (date1, date2) => {
    return format(date1, 'yyyy-MM-dd') === format(date2, 'yyyy-MM-dd');
  };

  return (
    <div>
      <h2>Available Slots</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {[...Array(7)].map((_, i) => {
          const date = addDays(today, i);
          return (
            <div
              key={i}
              onClick={() => handleDateClick(date)}
              style={{
                border: '1px solid black',
                padding: '10px',
                margin: '5px',
                cursor: 'pointer',
                backgroundColor: selectedDate && isSameDay(selectedDate, date) ? 'lightblue' : 'white',
              }}
            >
              {format(date, 'yyyy-MM-dd')}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
