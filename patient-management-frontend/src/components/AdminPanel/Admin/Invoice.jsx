import React, { useRef } from 'react';
import Navbar from '../../../components/Comman/Navbar';
import Sidebar from '../../../components/Comman/Sidebar';
import add from '../../../assets/Images/add.png'

const AddNewDoctor = () => {
    const fileInputRef = useRef(null);

    const handleFileInputClick = () => {
        // Trigger the input file dialog
        fileInputRef.current.click();
    };
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="p-6 bg-gray-50 h-88vh">
                    <div className='bg-white rounded-lg p-6'>
                        <div className="flex flex-wrap justify-between items-center border-b-2 border-indigo-100">
                            <h2 className="text-3xl font-bold mb-6">Create Bill</h2>
                            {/* <button className='mb-6'>
                            <img src={add} alt="add" />Add new field</button> */}
                        </div>
                        <div className="flex flex-wrap mt-4">
                            <div className="flex flex-col items-center  w-custom-80 mb-6 md:mb-0">
                                <div className="mb-4 flex flex-col items-center">
                                    {/* Photo Upload Box */}
                                    <div
                                        className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center cursor-pointer"
                                        onClick={handleFileInputClick}
                                    >
                                        <span className="text-gray-500 text-lg">Choose Photo</span>
                                    </div>

                                    {/* Hidden File Input */}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        name="file"
                                    />

                                    {/* Photo Button */}
                                    <button
                                        type="button"
                                        className="text-sky-500 text-base font-medium mt-2"
                                        onClick={handleFileInputClick}
                                    >
                                        Choose Photo
                                    </button>
                                </div>

                                <div className="mt-6">
                                    <p className="text-sm font-semibold mb-2">Upload Signature:</p>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center w-32 h-32">
                                        <label className="text-gray-400 text-center cursor-pointer">
                                            <span>Upload a file<br />PNG up to 5MB</span>
                                            <input type="file" name="file" className="hidden" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Right Section - Doctor Information */}
                            <div className="w-custom-79">
                                <div className="grid grid-cols-3 gap-4">
                                    {/* Row 1 */}
                                    <div className="flex flex-col relative mb-4">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 "> Name</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Name" />
                                    </div>
                                    <div className="flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 ">Other Text</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Other Text" />
                                    </div>
                                    {/* Row 2 */}
                                    <div className="flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 ">Email</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Email" />
                                    </div>
                                    <div className="flex flex-col relative mb-4">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Gender</label>
                                        <select className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0">
                                            <option>Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Check Up Time</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Checkup Time" />
                                    </div>
                                    <div className="flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Working Time</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Working Time" />
                                    </div>

                                    {/* Row 4 */}
                                    <div className="flex flex-col relative mb-4">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Phone Number</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Phone Number" />
                                    </div>
                                    <div className="flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Experience</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Experience" />
                                    </div>

                                    {/* Row 5 */}
                                    <div className="flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Country</label>
                                        <select className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0">
                                            <option>Select Country</option>
                                            <option>India</option>
                                            <option>USA</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col relative mb-4">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Doctor Email</label>
                                        <input type="email" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Email" />
                                    </div>

                                    {/* Row 6 */}
                                    <div className="flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Zip Code</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Zip Code" />
                                    </div>
                                    <div className="flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">City</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Select City" />
                                    </div>

                                    {/* Row 7 */}
                                    <div className="flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Online Consultation Rate</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="₹ 00000" />
                                    </div>
                                    <div className="flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Doctor Address</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Doctor Address" />
                                    </div>

                                    {/* Row 8 */}
                                    <div className=" flex flex-col relative">
                                        <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Description</label>
                                        <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Description" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hospital Information */}
                        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col relative">
                                    <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Doctor Current Hospital</label>
                                    <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Current Hospital" />
                                </div>
                                <div className="flex flex-col relative">
                                    <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Hospital Name</label>
                                    <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Hospital Name" />
                                </div>

                                <div className="flex flex-col relative">
                                    <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Hospital Website Link</label>
                                    <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Hospital Website Link" />
                                </div>
                                <div className="flex flex-col relative">
                                    <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Hospital Address</label>
                                    <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Hospital Address" />
                                </div>
                                <div className="flex flex-col relative">
                                    <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">Emergency Contact Number</label>
                                    <input type="text" className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0" placeholder="Enter Emergency Contact Number" />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="mt-4 w-[133px] h-[48px] p-[12px] px-[14px] rounded-tl-[10px]  bg-[#F6F8FB] text-black-500">Add</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddNewDoctor;
