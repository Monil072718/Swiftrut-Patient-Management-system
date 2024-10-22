import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, Box } from '@mui/material';
import DoctorSidebar from './DoctorSidebar'; // Assuming you have this component
import DoctorNavbar from './DoctorNavbar'; // Assuming you have this component
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const AppointmentTimeSlot = () => {
    const [open, setOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date(2020, 5, 18));
    const [endDate, setEndDate] = useState(new Date(2020, 5, 23));

    const handleClickOpen = (slot) => {
        setSelectedSlot(slot);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedSlot(null);
    };

    const timeSlots = ['08 AM', '09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM'];
    const days = ['Sun 17', 'Mon 18', 'Tue 19', 'Wed 20', 'Thu 21', 'Fri 22', 'Sat 23'];

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

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    // Function to format date in desired format
    const formatDateRange = (start, end) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formattedStart = start.toLocaleDateString('en-GB', options);
        const formattedEnd = end.toLocaleDateString('en-GB', options);
        return `${formattedStart} - ${formattedEnd}`;
    };


    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <DoctorSidebar />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <DoctorNavbar currentPage="Appointment Management" />

                {/* Main Box */}
                <div className="m-6 p-4 rounded-xl relative z-1 bg-white">
                    <h3 className="text-3xl font-bold text-start mb-6">Appointment Time Slot</h3>
                    {/* Table Container */}
                    <TableContainer component={Paper} className="rounded-lg " style={{ border: '1px solid #D9D9D9'}}>
                        <Table aria-label="appointment time slot table" className="border-collapse">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#F6F8FB' }}>
                                    <TableCell colSpan={days.length + 1} align="center" style={{ color: 'white', fontSize: '24px', fontFamily: 'Lato, sans-serif' }}>
                                        <div className="flex items-center justify-between">
                                            <ChevronLeftIcon onClick={handlePreviousDay} style={{ cursor: 'pointer', color: '#F6F8FB' }} />
                                            <div style={{ color: '#0eabeb', fontFamily: 'Lato, sans-serif', fontWeight: 600, fontSize: '18px' }}>
                                                {`${formatDateRange(startDate, endDate)}`}
                                            </div>
                                            <ChevronRightIcon onClick={handleNextDay} style={{ cursor: 'pointer', color: '#F6F8FB' }} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', textAlign: 'center'}}>Time</TableCell>
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
                                {timeSlots.map((time) => (
                                    <TableRow key={time}>
                                        <TableCell style={{ textAlign: 'center',  color: '#0EABEB',}}>{time}</TableCell>
                                        {days.map((day) => (
                                            <TableCell
                                                key={day}
                                                onClick={() => handleClickOpen(`${day} ${time}`)}
                                                style={{
                                                    cursor: 'pointer',
                                                    textAlign: 'center',
                                                    border: '1px solid #ddd',
                                                    color: '#D9D9D9',
                                                }}
                                            >
                                                No Schedule
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

                {/* Modal for disabling a slot */}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Not Available</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {selectedSlot ? `Selected Slot: ${selectedSlot}` : 'No slot selected'}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="note"
                            label="Add Note"
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">Cancel</Button>
                        <Button onClick={handleClose} color="error">Disable</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

export default AppointmentTimeSlot;
