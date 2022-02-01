import styles from './CalendarComponent.module.css';
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useContext} from "react";
import CalendarToolbar from "./CalendarToolbar";
import Context from "../../context/context";


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
    height: '100vh',
};


const CalendarComponent = () => {

    const context = useContext(Context);
    const {allEvents, view, onNavigateView} = context;

    return (
        <div className={styles.container}>
            <Calendar
                localizer={localizer}
                events={allEvents}
                onView={onNavigateView}
                view={view}
                startAccessor="start"
                endAccesor="end"
                style={customStyle}
                components={{
                    toolbar: CalendarToolbar,
                }}
            />

        </div>
    );
}

export default CalendarComponent;