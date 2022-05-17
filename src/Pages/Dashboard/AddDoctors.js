import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey = 'a5113089964d5e5d5c59a49191f9efa6';

    const { data: services, isLoading } = useQuery('services', () => fetch(`http://localhost:5000/service`).then(res => res.json()))

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result=> {
            if(result.success){
                const image = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: img
                }
                //sent to your database
            }
            console.log('image bb', result);
        })
    }

    if (isLoading) {
        return <Loading />
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

                <div className="form-control w-full max-w-x ">
                    <label className="label ">
                        <span className="label-text ">Specialty</span>
                    </label>

                    <select {...register('specialty')} class="select w-full max-w-xs input-bordered">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>




                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-600" >{errors.password.message}</span>}

                        {errors.email?.type === 'password' && <span className="label-text-alt text-red-600" >{errors.password.message}</span>}

                    </label>
                </div>

                {/* photo of a doctor */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}

                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600" >{errors.name.message}</span>}
                    </label>
                </div>


                <input className='btn w-full max-w-xs' value='Add' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctors;