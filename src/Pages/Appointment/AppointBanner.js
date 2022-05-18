import React from 'react';
import doctorsChair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointBanner = ({date, setDate}) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                <img src={doctorsChair} alt='' />
                </div>
                <div className='flex-1'>
                <DayPicker 
                mode='single'
                selected={date}
                onDayClick={setDate}
                
                />
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;