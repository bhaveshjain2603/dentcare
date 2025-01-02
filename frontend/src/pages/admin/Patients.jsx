import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Modal, useTheme, useMediaQuery } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../../styles/admin.css';

const Patients = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const patients = [
    { name: 'John Doe', email: 'john@example.com', address: '123 Main St, Cityville', phone: '(123) 456-7890', appointments: [{ service: 'Teeth Cleaning', date: '2024-12-01', time: '10:00 AM' }] },
    { name: 'Jane Smith', email: 'jane@example.com', address: '456 Elm St, Townsville', phone: '(987) 654-3210', appointments: [{ service: 'Cavity Filling', date: '2024-12-02', time: '12:30 PM' }] },
    { name: 'Alice Johnson', email: 'alice@example.com', address: '789 Maple St, Villagetown', phone: '(555) 123-4567', appointments: [{ service: 'Root Canal', date: '2024-12-03', time: '9:00 AM' }] },
    { name: 'Bob Brown', email: 'bob@example.com', address: '321 Oak St, Hamlet', phone: '(444) 987-6543', appointments: [{ service: 'Tooth Extraction', date: '2024-12-04', time: '2:00 PM' }] }
  ];

  const handleOpenModal = (patient) => {
    setSelectedPatient(patient);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPatient(null);
  };

  return (
    <Box className="p-4 sm:p-6">
      <Typography variant="h4" className="mb-6 font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl">
        Patient Management
      </Typography>
      <TableContainer component={Paper} className="admin-table-container" style={{ overflowX: 'auto', width: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">Name</TableCell>
              <TableCell className="font-semibold">Email</TableCell>
              <TableCell className="font-semibold">Address</TableCell>
              <TableCell className="font-semibold">Phone</TableCell>
              <TableCell className="font-semibold">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">{patient.name}</TableCell>
                <TableCell className="whitespace-nowrap">{patient.email}</TableCell>
                <TableCell className="whitespace-nowrap">{patient.address}</TableCell>
                <TableCell className="whitespace-nowrap">{patient.phone}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenModal(patient)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="patient-modal"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
          <Typography variant="h6" className="mb-4 font-bold">
            Patient Details
          </Typography>
          <Typography className="mb-2">
            <span className="font-semibold">Name:</span> {selectedPatient?.name}
          </Typography>
          <Typography className="mb-2">
            <span className="font-semibold">Email:</span> {selectedPatient?.email}
          </Typography>
          <Typography className="mb-2">
            <span className="font-semibold">Address:</span> {selectedPatient?.address}
          </Typography>
          <Typography className="mb-2">
            <span className="font-semibold">Phone:</span> {selectedPatient?.phone}
          </Typography>
          <Typography className="mb-4">
            <span className="font-semibold">Appointments:</span>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="font-semibold">Service</TableCell>
                    <TableCell className="font-semibold">Date</TableCell>
                    <TableCell className="font-semibold">Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedPatient?.appointments.map((appointment, index) => (
                    <TableRow key={index}>
                      <TableCell>{appointment.service}</TableCell>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
          <button
            onClick={handleCloseModal}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Close
          </button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Patients;
