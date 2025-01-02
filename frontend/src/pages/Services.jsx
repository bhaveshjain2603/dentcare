import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, Modal, TextField, MenuItem, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Close as CloseIcon } from '@mui/icons-material';
import service1 from '../img/service-1.jpg';
import service2 from '../img/service-2.jpg';
import service3 from '../img/service-3.jpg';
import service4 from '../img/service-4.jpg';

const Services = () => {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: null,
    age: '',
    address: '',
    city: '',
    pincode: '',
    medicalHistory: '',
    service: ''
  });

  const handleOpenAppointmentModal = () => setOpenAppointmentModal(true);
  const handleCloseAppointmentModal = () => setOpenAppointmentModal(false);

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
    // Here you would typically send the appointment data to your backend
    console.log('Appointment submitted:', appointmentForm);
    handleCloseAppointmentModal();
    setAppointmentForm({
      name: '',
      email: '',
      mobile: '',
      dob: null,
      age: '',
      address: '',
      city: '',
      pincode: '',
      medicalHistory: '',
      service: ''
    });
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: '600px' },
    maxHeight: '90vh',
    overflow: 'auto',
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
    p: 4,
  };

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      image: service1,
      treatments: [
        "Dental Cleanings",
        "Cavity Fillings",
        "Root Canals",
        "Dental Crowns",
        "Preventive Care"
      ]
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic dental procedures.",
      image: service2,
      treatments: [
        "Teeth Whitening",
        "Dental Veneers",
        "Dental Bonding",
        "Smile Makeovers",
        "Invisalign"
      ]
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth and improve your bite with our orthodontic solutions.",
      image: service3,
      treatments: [
        "Traditional Braces",
        "Clear Aligners",
        "Retainers",
        "Bite Correction",
        "Early Intervention"
      ]
    },
    {
      title: "Oral Surgery",
      description: "Expert surgical procedures for complex dental issues.",
      image: service4,
      treatments: [
        "Wisdom Teeth Removal",
        "Dental Implants",
        "Bone Grafting",
        "Tooth Extractions",
        "Jaw Surgery"
      ]
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly environment.",
      image: service1,
      treatments: [
        "Child Cleanings",
        "Fluoride Treatments",
        "Dental Sealants",
        "Space Maintainers",
        "Emergency Care"
      ]
    },
    {
      title: "Emergency Dental Care",
      description: "Immediate dental care for urgent situations and accidents.",
      image: service2,
      treatments: [
        "Toothache Relief",
        "Emergency Extractions",
        "Broken Tooth Repair",
        "Lost Filling Treatment",
        "Sports Injuries"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4"
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <Typography variant="h3" className="mb-4 font-bold text-gray-800">
            Our <span className='text-primary'>Services</span>
          </Typography>
          <Typography variant="h6" className="text-gray-600 text-lg sm:text-xl">
            Comprehensive Dental Care for Your Entire Family
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    className="h-48 object-cover"
                  />
                  <CardContent>
                    <Typography variant="h5" className="mb-3 font-semibold text-primary">
                      {service.title}
                    </Typography>
                    <Typography variant="body1" className="mb-4 text-gray-600">
                      {service.description}
                    </Typography>
                    <Box className="bg-gray-50 p-4 rounded-lg">
                      <Typography variant="h6" className="mb-2 text-gray-700">
                        Treatments Include:
                      </Typography>
                      <ul className="list-disc pl-5">
                        {service.treatments.map((treatment, idx) => (
                          <li key={idx} className="text-gray-600 mb-1 list-none">
                            {treatment}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Appointment Section */}
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
    </motion.div>
  );
};

export default Services;
