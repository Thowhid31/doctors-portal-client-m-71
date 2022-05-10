import React, { useState } from 'react';
import doctorsChair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                <img src={doctorsChair} alt='' />
                </div>
                <div className='flex-1'>
                <DayPicker 
                mode='single'
                selected={date}
                onSelect={setDate}
                
                />
                <p>You have selected: {format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;