import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctors = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()
    
    const onSubmit = async data => {
        
        console.log(data);
   

    }
    
    return (
        <div>
            <h2 className='text-2xl'>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name Here" className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600" >{errors.name.message}</span>}
                              </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email Here" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                })}

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600" >{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600" >{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <input type="text" placeholder="Specialty" className="input input-bordered w-full max-w-xs"
                                {...register("specialty", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                })}

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600" >{errors.password.message}</span>}

                                {errors.email?.type === 'password' && <span className="label-text-alt text-red-600" >{errors.password.message}</span>}

                            </label>
                        </div>

                       

                        <input className='btn w-full max-w-xs' value='Add' type="submit" />
                    </form>
        </div>
    );
};

export default AddDoctors;