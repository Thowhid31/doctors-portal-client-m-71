import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DocRow from './DocRow';

const ManageDoc = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://dry-everglades-70215.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading />
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
                                setDeletingDoctor={setDeletingDoctor}
                            ></DocRow>)
                        }

                    </tbody>
                </table>
            </div>
            { deletingDoctor && <DeleteConfirmModal
            deletingDoctor={deletingDoctor}
            refetch={refetch}
            setDeletingDoctor={setDeletingDoctor}
            ></DeleteConfirmModal> }

        </div>
    );
};

export default ManageDoc;