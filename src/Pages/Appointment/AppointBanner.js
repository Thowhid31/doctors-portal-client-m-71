import React from 'react';
import doctorsChair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointBanner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                <img src={doctorsChair} alt='' />
                </div>
                <div className='flex-1'>
                <DayPicker />
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;