import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='chair' />
                <div>
                    <h1 class="text-left text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="text-left py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Starts</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;