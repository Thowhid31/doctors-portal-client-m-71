import React from 'react';
import treatmentPhoto from '../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div>
            <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='p-10'>
                    <h1 class="text-left text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="text-left py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
                <img className='w-85' src={treatmentPhoto} alt='treatment' />
            </div>
        </div>
        </div>
    );
};

export default Treatment;