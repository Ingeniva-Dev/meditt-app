import React, {useContext, useState} from "react";
import './CalendarToolbar.css';
import arrowRight from './../../assets/Images/arrowRight.png';
import arrowLeft from './../../assets/Images/arrowleft.png';
import arrowDown from './../../assets/Images/arrowDown.png';
import Modal from "react-modal"
import Booking from "../Modal/Booking";
import {bookingStyle} from './../Modal/ModalStyles';
import Context from "../../context/context";
import {enGB} from 'date-fns/locale'
import {Calendar} from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import getWeek from 'date-fns/getWeek'
import {patientSelect, toolbarLi} from "../DummyData";
import Ul from "../UI/Ul";
import Select from "../UI/Select";
import useViewport from "../../hooks/use-viewport";
import PlusBtn from "../Common/PlusBtn";


const CalendarToolbar = () => {

    const [bookingIsOpen, setBookingIsOpen] = useState(false);
    const [calendarIsOpen, setCalendarIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState();
    const [selected, setSelected] = useState(new Date());
    const [active, setActive] = useState(1);
    const {width} = useViewport();

    const context = useContext(Context);
    const {onNavigateView, onNavigateDate, date} = context;

    const newBookingHandler = () => {
        setBookingIsOpen(prevBooking => !prevBooking);
    };

    const dateHandler = ({id, index}) => {
        onNavigateView(id);
        setActive(index)
    };

    const selectDayHandler = () => {
        setCalendarIsOpen(prevDataPiker => !prevDataPiker);
    };

    const dayClickHandler = (value) => {
        onNavigateDate(value);
        setSelected(value)
        setCalendarIsOpen(prevDataPiker => !prevDataPiker);
    };

    const nextWeekHandler = (date) => {
        onNavigateDate(date, 'NEXT')
    };

    const previousWeekHandler = (date) => {
        onNavigateDate(date, 'PREVIOUS')

    };

    const modifiers = {
        selected: select => select.getDate() === selected.getDate() &&
            select.getMonth() === selected.getMonth()
    };

    const modifiersClassNames = {
        selected: '-selected',
    };


    const calendar = <>
        <span className='backdrop' onClick={selectDayHandler}/>
        <Calendar
            date={selectedDay}
            onDateChange={setSelectedDay}
            locale={enGB}
            weekdayFormat={"EEEEEE"}
            onDayClick={dayClickHandler}
            modifiers={modifiers}
            modifiersClassNames={modifiersClassNames}
        />
    </>;


    return (
        <>
            {width < 768 && <div className={'mobile-view'}>
                <Select
                    placeholder='September'
                    optionData={patientSelect}/>
                <Select
                    placeholder='My Schedule'
                    optionData={patientSelect}/>
                <PlusBtn onClick={newBookingHandler}/>
            </div>}
            {width > 767 && <div className={'toolbar-container'}>
                <div className={'left-side'}>
                    <Ul
                        li={toolbarLi}
                        onClick={dateHandler}
                        style={'date-ul'}
                        liStyle={'date-li'}
                        active={active}
                        activeStyle={'active-toolbar'}
                    />
                    <div className={'weeks'}>
                        <img src={arrowLeft} alt='Arrow left' onClick={previousWeekHandler}/>
                        <span onClick={selectDayHandler}>Week {getWeek(date)}</span>
                        <img src={arrowRight} alt='Arrow right' onClick={nextWeekHandler}/>
                        {calendarIsOpen && calendar}
                    </div>
                </div>
                <div className={'right-side'}>
                    <div className={'schedule-change'}>
                        <span>My Schedule</span>
                        <img src={arrowDown} alt='Arrow down'/>
                    </div>
                    <PlusBtn onClick={newBookingHandler}/>
                </div>
            </div>}
            <Modal
                isOpen={bookingIsOpen}
                onRequestClose={newBookingHandler}
                style={bookingStyle}
                ariaHideApp={false}
            >
                <Booking onClick={newBookingHandler}/>
            </Modal>
        </>
    );
};

export default CalendarToolbar;