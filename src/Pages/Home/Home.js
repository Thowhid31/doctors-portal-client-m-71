import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import StayConnected from './StayConnected';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
            <Appointment/>
            <Testimonials/>
            <StayConnected/>
        </div>
    );
};

export default Home;