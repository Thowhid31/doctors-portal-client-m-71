import React from 'react';

const AppointService = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-secondary">{name}</h2>
          <p>{
          slots.length ? <span>{slots[0]}</span>
          : <span className='text-red-500'>Try another date.</span>

          }</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.</p>
          <div class="card-actions justify-center">
            <button disabled={slots.length===0} class="btn btn-secondary">Book Appointment</button>
          </div>
        </div>
      </div>
    );
};

export default AppointService;