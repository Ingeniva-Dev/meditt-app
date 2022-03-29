import styles from './CalendarComponent.module.css';
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useContext, useEffect, useMemo, useState} from "react";
import CalendarToolbar from "./CalendarToolbar";
import Context from "../../context/context";
import './../../big-calendar-style.css'
import useViewport from "../../hooks/use-viewport";
import {AgendaView} from "./Agenda/AgendaView";


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


const CalendarComponent = () => {


    const context = useContext(Context);
    const {allEvents, view, onNavigateView, date, onNavigateDate} = context;
    const {width} = useViewport();


    const {views, ...otherProps} = useMemo(() => ({
        views: {
            month: true,
            week: true,
            day: true,
            agenda: AgendaView,
        },
    }), []);


    const formats = {
        weekdayFormat: 'EEEE',
        dayFormat: (date, culture, localizer) => localizer.format(date, 'dd  EEEE', culture),
    }

    useEffect(() => {

        if (width < 768 && view !== 'agenda') {
            onNavigateView('agenda')
        } else if (width >= 768 && view === 'agenda') {
            onNavigateView('week')
        }

    }, [width])


    return (
        <Calendar
            {...otherProps}
            date={date}
            onNavigate={onNavigateDate}
            localizer={localizer}
            events={allEvents}
            onView={onNavigateView}
            view={view}
            views={views}
            startAccessor="start"
            endAccesor="end"
            formats={formats}
            components={{
                toolbar: CalendarToolbar,
            }}
        />
    );
}

export default CalendarComponent;