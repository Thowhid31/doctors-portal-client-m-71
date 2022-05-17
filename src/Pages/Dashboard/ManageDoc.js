import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DocRow from './DocRow';

const ManageDoc = () => {
    const {data: doctors, isLoading, refetch} = useQuery('doctors', ()=> fetch('http://localhost:5000/doctor', {
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
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
          doctors.map((doctor, index) => <DocRow
          key={doctor._key}
          doctor={doctor}
          index={index}
          refetch={refetch}
          ></DocRow>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageDoc;