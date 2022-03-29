import dayjs from "dayjs";
import * as dates from 'date-arithmetic'


export const rangeFunc = (start, end, unit = 'day')  => {
    let current = start
    const days = []
    while (dates.lte(current, end, unit)) {
        days.push(current)
        current = dates.add(current, 1, unit)
    }
    return days
}

export const inRange = (e, start, end, accessors) =>  {
    const eStart = dates.startOf(accessors.start(e), 'day')
    const eEnd = accessors.end(e)
    const startsBeforeEnd = dates.lte(eStart, end, 'day')
    const endsAfterStart = !dates.eq(eStart, eEnd, 'minutes')
        ? dates.gt(eEnd, start, 'minutes')
        : dates.gte(eEnd, start, 'minutes')
    return startsBeforeEnd && endsAfterStart
}

export const timeRangeLabel = (day, event, accessors) => {
    const end = accessors.end(event)
    const start = accessors.start(event)

    if (!accessors.allDay(event)) {
        if (dayjs(start).day() === dayjs(end).day()) {
            const timePeriod = `${dayjs(start).format('h:mma')} – ${dayjs(
                end
            ).format('h:mma')}`
            return timePeriod
        } else {
            const startDate = dayjs(start).format('DD-MM YYYY, h:mma')
            const endDate = dayjs(end).format('DD-MM YYYY, h:mma')
            return `${startDate} – ${endDate}`
        }
    }
}