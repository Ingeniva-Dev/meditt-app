import React, {useContext, useState} from "react";
import './CalendarToolbar.css';
import arrowRight from './../../assets/Images/arrowRight.png';
import arrowLeft from './../../assets/Images/arrowleft.png';
import arrowDown from './../../assets/Images/arrowDown.png';
import plusIcon from './../../assets/Images/plusIcon.png';
import Modal from "react-modal"
import Booking from "../Modal/Booking";
import {bookingStyle} from './../Modal/ModalStyles';
import Context from "../../context/context";
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const CalendarToolbar = () => {

    const [bookingIsOpen, setBookingIsOpen] = useState(false);
    const [datePikerIsOpen, setDatePikerIsOpen] = useState(false);
    const context = useContext(Context);
    const {onNavigateView} = context;

    const newBookingHandler = () => {
        setBookingIsOpen(prevBooking => !prevBooking);
    };

    const dateHandler = (event) => {
        onNavigateView(event.target.id);
    };

    const weekChangeHandler = () => {
        setDatePikerIsOpen(prevDataPiker => !prevDataPiker);
    };

    const [selectedDay, setSelectedDay] = useState();
    const calendar = <> <span className='backdrop' onClick={weekChangeHandler}/>
        <DatePickerCalendar Date={selectedDay} onDateChange={setSelectedDay} locale={enGB} /> </>;

    return (
        <>
        <div className={'container'}>
            <div className={'left-side'}>
                <ul className={'date-ul'}>
                    <li id='day' onClick={dateHandler}>Daily</li>
                    <li id='week' onClick={dateHandler}>Weekly</li>
                    <li id='month' onClick={dateHandler}>Monthly</li>
                </ul>
                <div className={'weeks'}>
                    <img src={arrowLeft} alt='Arrow left'/>
                    <span onClick={weekChangeHandler}>Week 37</span>
                    <img src={arrowRight} alt='Arrow right'/>
                    {datePikerIsOpen && calendar}
                </div>

            </div>
            <div className={'right-side'}>
                <div className={'schedule-change'}>
                    <span>My Schedule</span>
                    <img src={arrowDown} alt='Arrow down'/>
                </div>
                <div className={'plus'} onClick={newBookingHandler}>
                    <img src={plusIcon} alt='Plus icon'/>
                </div>
            </div>
        </div>
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