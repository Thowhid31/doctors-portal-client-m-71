import React from 'react';

const InfoCards = ({ img }) => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl pl-6">
            <figure><img src={img} alt="Album"></img></figure>
            <div class="card-body text-white">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCards;