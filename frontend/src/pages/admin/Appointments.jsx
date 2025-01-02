import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme, useMediaQuery } from '@mui/material';

const Appointments = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const appointments = [
    { name: 'John Doe', service: 'Teeth Cleaning', amount: '$100', requestedAt: '2024-12-01 10:00 AM', completedAt: '2024-12-01 11:00 AM', payment: 'Completed' },
    { name: 'Jane Smith', service: 'Cavity Filling', amount: '$150', requestedAt: '2024-12-02 12:30 PM', completedAt: '2024-12-02 1:30 PM', payment: 'Pending' },
    { name: 'Alice Johnson', service: 'Root Canal', amount: '$300', requestedAt: '2024-12-03 9:00 AM', completedAt: '2024-12-03 10:00 AM', payment: 'Completed' },
    { name: 'Bob Brown', service: 'Tooth Extraction', amount: '$200', requestedAt: '2024-12-04 2:00 PM', completedAt: '2024-12-04 3:00 PM', payment: 'Pending' }
  ];

  return (
    <Box className="p-4 sm:p-6">
      <Typography variant="h4" className="mb-6 font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl">
        Appointment Management
      </Typography>
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">Name</TableCell>
               <TableCell className="font-semibold">Dental Service</TableCell>
               <TableCell className="font-semibold">Total Amount</TableCell>
               <TableCell className="font-semibold">Requested At</TableCell>
               <TableCell className="font-semibold">Completed At</TableCell>
              <TableCell className="font-semibold">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">{appointment.name}</TableCell>
                 <TableCell className="whitespace-nowrap">{appointment.service}</TableCell>
                <TableCell className="whitespace-nowrap">{appointment.amount}</TableCell>
                 <TableCell className="whitespace-nowrap">{appointment.requestedAt}</TableCell>
                 <TableCell className="whitespace-nowrap">{appointment.completedAt}</TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    style={{ color: appointment.payment === 'Pending' ? 'grey' : 'green' }}
                    className="whitespace-nowrap"
                  >
                    {appointment.payment}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Appointments;
