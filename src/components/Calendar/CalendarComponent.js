import styles from './CalendarComponent.module.css';
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useContext, useState} from "react";
import CalendarToolbar from "./CalendarToolbar";
import Context from "../../context/context";
import './../../big-calendar-style.css'



const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parseISO,
    startOfWeek,
    getDay,
    locales
});

const customStyle = {
    height: 'calc(100vh - 136px)',
    '.rbc-timeslot-group': {
        minHeight:'70px'
    }

};



const CalendarComponent = () => {


    const context = useContext(Context);
    const {allEvents, view, onNavigateView, date, onNavigateDate} = context;

    const formats = {
        weekdayFormat:'EEEE',
        dayFormat: (date, culture, localizer) => localizer.format(date, 'dd  EEEE', culture),
    }




    return (
        <Calendar
            date={date}
            onNavigate={onNavigateDate}
            localizer={localizer}
            events={allEvents}
            onView={onNavigateView}
            view={view}
            startAccessor="start"
            endAccesor="end"
            formats={formats}
            style={customStyle}
            components={{
                toolbar: CalendarToolbar,
            }}
        />
    );
}

export default CalendarComponent;