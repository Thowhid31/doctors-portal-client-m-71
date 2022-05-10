import React from 'react';

const InfoCards = ({ img, cardTitle, cardDetails, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='p-6'><img src={img} alt="Album"></img></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardDetails}</p>
            </div>
        </div>
    );
};

export default InfoCards;