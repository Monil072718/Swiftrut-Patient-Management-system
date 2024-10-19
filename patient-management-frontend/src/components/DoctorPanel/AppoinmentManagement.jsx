import React, { useState } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import DoctorSidebar from './DoctorSidebar';
import DoctorNavbar from './DoctorNavbar';


const DoctorPrivacy = () => {

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <DoctorSidebar />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <DoctorNavbar currentPage="Appoinment Management" />
            </div>
        </div>
    );
};

export default DoctorPrivacy;
