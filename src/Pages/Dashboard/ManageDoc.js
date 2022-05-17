import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageDoc = () => {
    const {data: doctors, isLoading} = useQuery('doctors', ()=> fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=> res.json()));

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h1 className="2xl">Manage Doc: {doctors.length}</h1>
        </div>
    );
};

export default ManageDoc;