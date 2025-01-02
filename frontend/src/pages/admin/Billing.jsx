import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Modal, useTheme, useMediaQuery } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Billing = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const bills = [
    { name: 'John Doe', service: 'Teeth Cleaning', amount: '$100', totalBill: '$100', phone: '(123) 456-7890' },
    { name: 'Jane Smith', service: 'Cavity Filling', amount: '$150', totalBill: '$150', phone: '(987) 654-3210' },
    { name: 'Alice Johnson', service: 'Root Canal', amount: '$300', totalBill: '$300', phone: '(555) 123-4567' },
    { name: 'Bob Brown', service: 'Tooth Extraction', amount: '$200', totalBill: '$200', phone: '(444) 987-6543' }
  ];

  const handleOpenModal = (bill) => {
    setSelectedBill(bill);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedBill(null);
  };

  return (
    <Box className="p-4 sm:p-6">
      <Typography variant="h4" className="mb-6 font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl">
        Billing Management
      </Typography>
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">Name</TableCell>
              {!isMobile && <TableCell className="font-semibold">Dental Service</TableCell>}
              <TableCell className="font-semibold">Total Amount</TableCell>
              {!isMobile && <TableCell className="font-semibold">Phone</TableCell>}
              <TableCell className="font-semibold">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map((bill, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">{bill.name}</TableCell>
                {!isMobile && <TableCell className="whitespace-nowrap">{bill.service}</TableCell>}
                <TableCell className="whitespace-nowrap">{bill.amount}</TableCell>
                {!isMobile && <TableCell className="whitespace-nowrap">{bill.phone}</TableCell>}
                <TableCell>
                  <IconButton onClick={() => handleOpenModal(bill)}>
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
        aria-labelledby="bill-modal"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
          <Typography variant="h6" className="mb-4 font-bold">
            Bill Details
          </Typography>
          <Typography className="mb-2">
            <span className="font-semibold">Name:</span> {selectedBill?.name}
          </Typography>
          <Typography className="mb-2">
            <span className="font-semibold">Service:</span> {selectedBill?.service}
          </Typography>
          <Typography className="mb-2">
            <span className="font-semibold">Amount:</span> {selectedBill?.amount}
          </Typography>
          <Typography className="mb-4">
            <span className="font-semibold">Phone:</span> {selectedBill?.phone}
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

export default Billing;
