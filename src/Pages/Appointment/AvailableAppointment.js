import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointService from './AppointService';


const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('appointment.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Available Appointments: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointService
                    key={service._id}
                    service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;