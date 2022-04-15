import React from 'react'
import * as dates from 'date-arithmetic'
import dayjs from 'dayjs'
import {inRange, rangeFunc, timeRangeLabel} from "./utils";
import styles from './AgendaView.module.css';


export const AgendaView = ({accessors, localizer, date, events, monthIndex}) => {

    const renderDay = (day, events) => {
        events = events.filter((e) => inRange(e, dates.startOf(day, 'day'), dates.endOf(day, 'day'), accessors))
        return events.map((event, idx) => {
            return (
                <div
                    key={idx}
                    className={`${styles['event']} ${idx === 0 && styles['space']}`}
                >
                    {idx === 0 ? (
                        <div className={styles['week-day']}>
                            <span>{localizer.format(day, 'dd')}</span>
                            <span>{localizer.format(day, 'E')}</span>
                        </div>
                    ) : <div/>}
                    <div
                        className={styles['event-box']}
                    >
                        <div className={styles['title']}>{accessors.title(event)}</div>
                        <div className={styles['time']}>{timeRangeLabel(day, event, accessors)}</div>
                    </div>
                </div>
            )
        }, [])
    }

    let currentDate = new Date();
    let eventMonth = new Date(currentDate.getFullYear(), monthIndex, 1);
    let dayQuantity = new Date(currentDate.getFullYear(), monthIndex + 1, 0).getDate() - 1;

    const end = dates.add(date, 365, 'day');
    const maxRange = dates.add(eventMonth, dayQuantity, 'day');
    const range = rangeFunc(eventMonth, maxRange, 'day');

    events = events.filter((event) => inRange(event, date, end, accessors));
    events.sort((a, b) => +accessors.start(a) - +accessors.start(b));

    return (
        <div className={styles.container}>
            {events.length !== 0
                ? range.map((day, idx) => renderDay(day, events, idx))
                : 'No event dates in range'}
        </div>
    )
}


AgendaView.title = (start, {localizer}) => {
    const end = dates.add(start, 1, 'month')
    return localizer.format({start, end}, 'agendaHeaderFormat')
}

// AgendaView.navigate = (date, action) => {
//     const sDate = dayjs(date).startOf('month').toDate()
//     switch (action) {
//         case 'PREV':
//             return dates.add(sDate, -1, 'month')
//         case 'NEXT':
//             return dates.add(sDate, 1, 'month')
//         default:
//             return date
//     }
// }


