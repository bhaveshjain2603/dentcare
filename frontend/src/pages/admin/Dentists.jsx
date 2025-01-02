import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Modal, TextField, Button, useTheme, useMediaQuery } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Dentists = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDentist, setSelectedDentist] = useState(null);
  const [editedDentist, setEditedDentist] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const dentists = [
    { name: 'Dr. John Smith', role: 'Orthodontist', experience: '10 years', university: 'Harvard University' },
    { name: 'Dr. Jane Doe', role: 'Periodontist', experience: '8 years', university: 'Stanford University' },
    { name: 'Dr. Alice Johnson', role: 'Endodontist', experience: '5 years', university: 'Columbia University' },
    { name: 'Dr. Bob Brown', role: 'General Dentist', experience: '15 years', university: 'University of California' }
  ];

  const handleOpenModal = (dentist) => {
    setSelectedDentist(dentist);
    setEditedDentist(dentist);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedDentist(null);
    setEditedDentist({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDentist({ ...editedDentist, [name]: value });
  };

  const handleSaveChanges = () => {
    // Logic to save changes can be implemented here
    console.log('Updated Dentist Info:', editedDentist);
    handleCloseModal();
  };

  return (
    <Box className="p-4 sm:p-6">
      <Typography variant="h4" className="mb-6 font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl">
        Dentist Management
      </Typography>
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">Name</TableCell>
              {!isMobile && <TableCell className="font-semibold">Role</TableCell>}
              <TableCell className="font-semibold">Experience</TableCell>
              {!isMobile && <TableCell className="font-semibold">University</TableCell>}
              <TableCell className="font-semibold">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dentists.map((dentist, index) => (
              <TableRow key={index}>
                <TableCell>{dentist.name}</TableCell>
                {!isMobile && <TableCell className="whitespace-nowrap">{dentist.role}</TableCell>}
                <TableCell className="whitespace-nowrap">{dentist.experience}</TableCell>
                {!isMobile && <TableCell className="whitespace-nowrap">{dentist.university}</TableCell>}
                <TableCell>
                  <IconButton onClick={() => handleOpenModal(dentist)}>
                    <EditIcon />
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
        aria-labelledby="edit-dentist"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
          <Typography variant="h6" className="mb-6 font-bold">  
            Edit Dentist Information
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={editedDentist.name || ''}
            onChange={handleInputChange}
            fullWidth
            className="mb-6"
          />
          <TextField
            label="Role"
            name="role"
            value={editedDentist.role || ''}
            onChange={handleInputChange}
            fullWidth
            className="mb-6"
          />
          <TextField
            label="Experience"
            name="experience"
            value={editedDentist.experience || ''}
            onChange={handleInputChange}
            fullWidth
            className="mb-6"
          />
          <TextField
            label="University"
            name="university"
            value={editedDentist.university || ''}
            onChange={handleInputChange}
            fullWidth
            className="mb-6"
          />
          <Box className="mt-4 flex justify-between">
            <Button variant="contained" color="primary" onClick={handleSaveChanges}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Dentists;
