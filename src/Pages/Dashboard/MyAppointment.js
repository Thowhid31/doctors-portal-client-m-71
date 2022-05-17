import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const [user] = useAuthState(auth)

    const [appointments, setAppointments] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            fetch(`https://dry-everglades-70215.herokuapp.com/booking?patient=${user.email}`,{
              method: 'GET',
              headers: {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res => {
              if(res.status === 401 || res.status === 403){
                signOut(auth)
                localStorage.removeItem('accessToken')
                navigate ('/')
              }
  
              console.log('res', res);
             return  res.json()
            })
            .then(data => {
              setAppointments(data);
            })
        }

    }, [user])

    return (
        <div>
            <h1>My Appointment: {appointments.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Slot</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
      {
          appointments.map((a, index) =>  <tr>
            <th>{index + 1}</th>
            <td>{a.patientName}</td>
            <td>{a.date}</td>
            <td>{a.slot}</td>
            <td>{a.treatment}</td>
          </tr>)
      }

     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;