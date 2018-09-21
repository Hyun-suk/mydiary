import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events';
import 'react-big-calendar/lib/css/react-big-calendar.css';


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment)) // or globalizeLocalizer
moment.locale('ko-KR')
BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
console.log(events);

const Calendar = props => (
  <div style={{height: 700}}>
    <BigCalendar
      events={events}
      views={allViews}
      step={30}
      defaultDate={new Date(2015, 3, 1)}
    />
  </div>
);

export default Calendar;
