import React from 'react';

const DoctorOnSite = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-lg w-[563px] h-[1080px] p-6 shadow-lg overflow-auto max-h-full">
                
                {/* Doctor Info Header */}
                <div className="flex items-center bg-blue-500 rounded-lg p-4 mb-6 relative">
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Doctor"
                        className="w-20 h-20 rounded-full mr-4 border-2 border-white"
                    />
                    <div>
                        <h2 className="text-white text-lg font-bold">Dr. Cristofer Pasquinades</h2>
                        <span className="bg-blue-100 text-blue-500 font-semibold text-sm px-2 py-1 rounded-full">
                            Male
                        </span>
                    </div>
                    <span className="absolute right-4 top-4 bg-green-100 text-green-600 font-semibold px-3 py-1 rounded-full">
                        Onsite
                    </span>
                </div>

                {/* Doctor Details */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 grid grid-cols-2 gap-4 text-gray-700">
                    <div>
                        <p className="text-xs font-semibold">Doctor Qualification</p>
                        <p className="text-sm font-bold">MBBS</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Years Of Experience</p>
                        <p className="text-sm font-bold">6+ Year</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Specialty Type</p>
                        <p className="text-sm font-bold">Obstetrics and Gynecology</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Working Time</p>
                        <p className="text-sm font-bold">6 Hour</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Patient Check Up Time</p>
                        <p className="text-sm font-bold">2 Hour</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Break Time</p>
                        <p className="text-sm font-bold">1 Hour</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-xs font-semibold">Description</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-xs font-semibold">Signature</p>
                        <img src="https://via.placeholder.com/150" alt="Signature" className="w-1/2" />
                    </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-2 gap-4 text-gray-700">
                    <div>
                        <p className="text-xs font-semibold">Age</p>
                        <p className="text-sm font-bold">36 Years</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Email</p>
                        <p className="text-sm font-bold">kenzi.lawson@example.com</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Phone</p>
                        <p className="text-sm font-bold">89564 25462</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Online Consultation Rate</p>
                        <p className="text-sm font-bold">₹ 1,000</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Country</p>
                        <p className="text-sm font-bold">India</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">State</p>
                        <p className="text-sm font-bold">Gujarat</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Zip Code</p>
                        <p className="text-sm font-bold">382002</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold">City</p>
                        <p className="text-sm font-bold">Gandhinagar</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-xs font-semibold">Address</p>
                        <p className="text-sm">B-105 Virat Bungalows Punagam Motavaracha Jamnagar.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorOnSite;
