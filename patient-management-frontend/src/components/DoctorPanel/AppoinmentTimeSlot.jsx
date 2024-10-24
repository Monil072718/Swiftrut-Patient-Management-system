import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Button, TextField } from '@mui/material';
import DoctorSidebar from './DoctorSidebar';
import DoctorNavbar from './DoctorNavbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const AppointmentTimeSlot = () => {
    const [open, setOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date(2020, 5, 18));
    const [endDate, setEndDate] = useState(new Date(2020, 5, 23));
    const [selectedSlotStart, setSelectedSlotStart] = useState(null);
    const [selectedSlotEnd, setSelectedSlotEnd] = useState(null);

    const timeSlots = ['08 AM', '09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM'];
    const days = ['Sun 17', 'Mon 18', 'Tue 19', 'Wed 20', 'Thu 21', 'Fri 22', 'Sat 23'];

    const [formData, setFormData] = useState({
        note: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePreviousDay = () => {
        const previousDate = new Date(selectedDate);
        previousDate.setDate(selectedDate.getDate() - 1);
        setSelectedDate(previousDate);
    };

    const handleNextDay = () => {
        const nextDate = new Date(selectedDate);
        nextDate.setDate(selectedDate.getDate() + 1);
        setSelectedDate(nextDate);
    };

    const formatDateRange = (start, end) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formattedStart = start.toLocaleDateString('en-GB', options);
        const formattedEnd = end.toLocaleDateString('en-GB', options);
        return `${formattedStart} - ${formattedEnd}`;
    };


    const formatSlot = (date, startTime, endTime) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return `${formattedDate} ${startTime} - ${endTime ? endTime : ''}`;
    };

    const handleOpenModal = (day, time) => {
        const dayIndex = days.indexOf(day); 
        const date = new Date(selectedDate);
        date.setDate(selectedDate.getDate() + dayIndex - 1); 
    
        // Set the selected time slot
        setSelectedSlot(`${day} ${time}`);
        setSelectedSlotStart(time);
        setSelectedSlotEnd(getEndTime(time)); 
        setSelectedDate(date);
        setOpen(true); 
    };

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedSlot(null);
        setSelectedDate(new Date()); 
        setFormData({ note: '' });
    };

    const getEndTime = (startTime) => {
        const timeIndex = timeSlots.indexOf(startTime);
        return timeIndex < timeSlots.length - 1 ? timeSlots[timeIndex + 1] : null;
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <DoctorSidebar />
            <div className="flex-1 flex flex-col">
                <DoctorNavbar currentPage="Appointment Management" />
                <div className="m-6 p-4 rounded-xl shadow-md relative z-1 bg-white">
                    <h3 className="text-3xl font-bold text-start mb-6">Appointment Time Slot</h3>
                    <TableContainer component={Paper} className="rounded-lg" style={{ border: '1px solid #D9D9D9' }}>
                        <Table aria-label="appointment time slot table" className="border-collapse">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#F6F8FB' }}>
                                    <TableCell colSpan={days.length + 1} align="center" style={{ fontSize: '24px', fontFamily: 'Lato, sans-serif' }}>
                                        <div className="flex items-center justify-center space-x-4">
                                            <ChevronLeftIcon onClick={handlePreviousDay} style={{ cursor: 'pointer', color: '#0eabeb' }} />
                                            <div style={{ color: '#0eabeb', fontFamily: 'Lato, sans-serif', fontWeight: 600, fontSize: '18px' }}>
                                                {`${formatDateRange(startDate, endDate)}`}
                                            </div>
                                            <ChevronRightIcon onClick={handleNextDay} style={{ cursor: 'pointer', color: '#0eabeb' }} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', textAlign: 'center' }}>Time</TableCell>
                                    {days.map((day, index) => (
                                        <TableCell
                                            key={day}
                                            style={{
                                                fontWeight: 'bold',
                                                borderBottom: '1px solid #ddd',
                                                borderRight: index < days.length - 1 ? '1px solid #ddd' : 'none',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {day}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {timeSlots.map((time, index) => (
                                    <TableRow key={time}>
                                        {/* 1 PM ke liye rowSpan set karo */}
                                        {time === '01 PM' ? (
                                            <>
                                                <TableCell className="text-center border" rowSpan={2} style={{ fontSize: '16px', fontFamily: 'Lato, sans-serif', color: '#0eabeb', textAlign: 'center' }}>
                                                    {time} - 02 PM
                                                </TableCell>
                                                <TableCell colSpan={days.length} className="text-center border" style={{ fontSize: '16px', fontFamily: 'Lato, sans-serif', color: '#000', textAlign: 'center' }}>
                                                    Lunch Time
                                                </TableCell>
                                            </>
                                        ) : time !== '02 PM' ? (
                                            <>
                                                <TableCell className="text-center border" style={{ fontSize: '16px', fontFamily: 'Lato, sans-serif', color: '#0eabeb', textAlign: 'center' }}>
                                                    {time}
                                                </TableCell>
                                                {days.map((day) => (
                                                    <TableCell
                                                        key={day}
                                                        className="text-center border cursor-pointer"
                                                        onClick={() => handleOpenModal(day, time)} // Pass the day and time
                                                        style={{ fontSize: '16px', fontFamily: 'Lato, sans-serif', color: '#D9D9D9', textAlign: 'center' }}
                                                    >
                                                        No Schedule
                                                    </TableCell>
                                                ))}
                                            </>
                                        ) : null}
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </TableContainer>
                </div>
                <Modal open={open} onClose={handleCloseModal}>
                    <div className="flex justify-center items-center h-screen">
                        <Paper className="w-96 p-6 rounded-lg">
                            <h2 className="text-lg font-bold mb-2">Not Available</h2>
                            <p className="text-gray-500 mb-4 flex items-center">
                                <AccessAlarmIcon className="mr-2" aria-label="Time slot icon" />
                                <span>
                                    {formatSlot(selectedDate, selectedSlotStart, selectedSlotEnd)}
                                </span>
                            </p>

                            <TextField
                                fullWidth
                                name="note"
                                value={formData.note}
                                onChange={handleInputChange}
                                placeholder="Add your note here..."
                                label="Note"
                                multiline
                                rows={4}
                                variant="outlined"
                                required
                                InputLabelProps={{
                                    shrink: true,
                                    style: {
                                        textDecoration: 'none',
                                        color: 'inherit'
                                    },
                                }}
                            />
                            <div className="flex justify-between mt-4">
                                <Button
                                    variant="contained"
                                    startIcon={<EditIcon />}
                                    style={{ backgroundColor: '#28a745' }}
                                    onClick={handleCloseModal}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    startIcon={<DeleteIcon />}
                                    style={{ backgroundColor: '#dc3545' }}
                                    onClick={() => {
                                        console.log(`Disabled ${selectedSlot}`);
                                        handleCloseModal();
                                    }}
                                >
                                    Disable
                                </Button>
                            </div>
                        </Paper>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default AppointmentTimeSlot;
