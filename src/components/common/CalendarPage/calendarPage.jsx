import React from 'react'
import Header from '../header'
import Footer from '../footer'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

export default class CalendarPage extends React.Component {
  render() {
    return(
      <div>
          <Header />

          <FullCalendar
            plugins = {[dayGridPlugin, googleCalendarPlugin]}
            initialView = 'dayGridMonth'
            googleCalendarApiKey = 'AIzaSyBldH9zX4bDyUi_VP4lEuo-QDkU-USn8rg'
            events = {{googleCalendarId : 'ajserebii@gmail.com'}}
          />
          <Footer />
      </div>
  )

  }
}