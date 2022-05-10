import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
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
        </div>
    );
};

export default Home;