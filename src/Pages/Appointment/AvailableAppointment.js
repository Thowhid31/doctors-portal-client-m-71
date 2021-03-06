import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointService from './AppointService';
import BookingModal from './BookingModal';


const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP')
    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], ()=>fetch(`https://dry-everglades-70215.herokuapp.com/available?date=${formattedDate}`)
       .then(res => res.json()))

    if(isLoading){
        return <Loading/>
    }
    
    // useEffect(()=>{
    //     fetch(`https://dry-everglades-70215.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formattedDate])
    return (
        <div>
            <h4 className='text-xl text-primary text-center my-12'>Available Appointments: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <AppointService
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;