import React from 'react';
import InfoCards from './InfoCards';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCards cardTitle="Opening Ours" cardDetails="Our Opening Clock doesn't stops."  bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}/>
            <InfoCards cardTitle="Our Locations" cardDetails="Dhaka, Mymensingh is our Location to locate us." bgClass="bg-accent" img={marker}/>
            <InfoCards cardTitle="Contact Us" cardDetails="24/7 Customer service provided for you." bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}/>
        </div>
    );
};

export default Info;