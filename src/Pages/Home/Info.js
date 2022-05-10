import React from 'react';
import InfoCards from './InfoCards';
import clock from '../../assets/icons/clock.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCards img={clock}/>
            <InfoCards img={clock}/>
            <InfoCards img={clock}/>
        </div>
    );
};

export default Info;