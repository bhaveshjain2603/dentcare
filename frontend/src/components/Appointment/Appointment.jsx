import React, { useState } from 'react';
import { Box, Container, Typography, Button, Modal, IconButton, TextField, Grid, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const services = [
  { title: "General Dentistry" },
  { title: "Cosmetic Dentistry" },
  { title: "Orthodontics" },
  { title: "Oral Surgery" },
  { title: "Pediatric Dentistry" },
  { title: "Emergency Care" }
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '800px',
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const Appointment = () => {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    dob: null,
    age: '',
    address: '',
    city: '',
    pincode: '',
    medicalHistory: ''
  });

  const handleOpenAppointmentModal = () => {
    setOpenAppointmentModal(true);
  };

  const handleCloseAppointmentModal = () => {
    setOpenAppointmentModal(false);
    setAppointmentForm({
      name: '',
      email: '',
      mobile: '',
      service: '',
      dob: null,
      age: '',
      address: '',
      city: '',
      pincode: '',
      medicalHistory: ''
    });
  };

  const handleAppointmentFormChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setAppointmentForm(prev => ({
      ...prev,
      dob: date
    }));
  };

  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Appointment Form Data:', appointmentForm);
    handleCloseAppointmentModal();
  };

  return (
    <>
      <Box className="py-16 bg-gray-50">
        <Container maxWidth="md">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Typography variant="h3" className="mb-4 font-bold text-gray-800">
              Book Your <span className="text-primary">Appointment</span>
            </Typography>
            <Typography variant="body1" className="mb-8 text-gray-600 max-w-2xl mx-auto">
              Ready to prioritize your dental health? Schedule an appointment with our experienced team. 
              We offer flexible timing and personalized care to ensure your comfort and satisfaction.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleOpenAppointmentModal}
              className="px-8 py-3 text-lg"
            >
              Book Appointment
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Appointment Modal */}
      <Modal
        open={openAppointmentModal}
        onClose={handleCloseAppointmentModal}
        aria-labelledby="appointment-modal-title"
      >
        <Box sx={modalStyle}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <Box className="flex justify-between items-center mb-6">
              <Typography variant="h5" component="h2" className="text-primary font-bold">
                Book Your Appointment
              </Typography>
              <IconButton
                onClick={handleCloseAppointmentModal}
                className="text-primary"
                size="large"
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Typography variant="body1" className="text-gray-600 mb-6">
              Please fill out the form below with your details, and we'll get back to you to confirm your appointment.
            </Typography>

            <form onSubmit={handleSubmitAppointment} className="space-y-4">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={appointmentForm.name}
                    onChange={handleAppointmentFormChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={appointmentForm.email}
                    onChange={handleAppointmentFormChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="mobile"
                    value={appointmentForm.mobile}
                    onChange={handleAppointmentFormChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Service Category"
                    name="service"
                    value={appointmentForm.service}
                    onChange={handleAppointmentFormChange}
                    required
                    variant="outlined"
                  >
                    {services.map((service, index) => (
                      <MenuItem key={index} value={service.title}>
                        {service.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of Birth"
                      value={appointmentForm.dob}
                      onChange={handleDateChange}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          required: true,
                          variant: "outlined"
                        }
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Age"
                    name="age"
                    type="number"
                    value={appointmentForm.age}
                    onChange={handleAppointmentFormChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={appointmentForm.address}
                    onChange={handleAppointmentFormChange}
                    required
                    variant="outlined"
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="City"
                    name="city"
                    value={appointmentForm.city}
                    onChange={handleAppointmentFormChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Pincode"
                    name="pincode"
                    value={appointmentForm.pincode}
                    onChange={handleAppointmentFormChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Medical History"
                    name="medicalHistory"
                    value={appointmentForm.medicalHistory}
                    onChange={handleAppointmentFormChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Please mention any medical conditions, allergies, or ongoing medications..."
                  />
                </Grid>
              </Grid>

              <Box className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleCloseAppointmentModal}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit Appointment
                </Button>
              </Box>
            </form>
          </motion.div>
        </Box>
      </Modal>
    </>
  );
};

export default Appointment;