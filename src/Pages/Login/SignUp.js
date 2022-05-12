import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate();

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      let signInErrorMessage;

      if(loading || gLoading || updating){
          return <Loading/>
      }

      if(error || gError || updateError){
        signInErrorMessage = <p className='text-red-600'>{error?.message || gError?.message || updateError?.message}</p>
      }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile ({displayName: data.name});
        console.log('update done');
        navigate('/appointment');
    }

    if (gUser || user) {
        console.log(gUser);
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name Here" class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}

                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600" >{errors.name.message}</span>}
                              </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email Here" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                })}

                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600" >{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600" >{errors.email.message}</span>}

                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password Here" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: 6,
                                    message: 'Must be 6 character or longer'
                                })}

                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600" >{errors.password.message}</span>}

                                {errors.email?.type === 'password' && <span class="label-text-alt text-red-600" >{errors.password.message}</span>}

                            </label>
                        </div>

                        {signInErrorMessage}

                        <input className='btn w-full max-w-xs' value='Sign Up' type="submit" />
                    </form>
                    <small className='text-center'>Already in Doctors Portal? <Link to='/login' className='text-secondary'>Login</Link></small>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline">Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;