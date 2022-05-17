import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sideboard" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl text-primary font-bold'>Here are your Dashboard</h2>
                <Outlet />


            </div>
            <div class="drawer-side">
                <label for="dashboard-sideboard" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;