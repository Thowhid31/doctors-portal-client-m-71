import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const [user] = useAuthState(auth)

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
        }

    }, [user])

    return (
        <div>
            <h1>My Appointment: {appointments.length}</h1>
        </div>
    );
};

export default MyAppointment;