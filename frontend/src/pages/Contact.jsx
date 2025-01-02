import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Box, Paper, Modal, IconButton } from '@mui/material';
import { Phone, Email, LocationOn, AccessTime, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [openEmergencyModal, setOpenEmergencyModal] = useState(false);

  const handleOpenEmergencyModal = () => setOpenEmergencyModal(true);
  const handleCloseEmergencyModal = () => setOpenEmergencyModal(false);

  const contactInfo = [
    {
      icon: <Phone />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "text-blue-500"
    },
    {
      icon: <Email />,
      title: "Email",
      details: ["info@DentCare.com"],
      color: "text-green-500"
    },
    {
      icon: <LocationOn />,
      title: "Location",
      details: ["123 Dental Street", "New York, NY 10001"],
      color: "text-red-500"
    },
    {
      icon: <AccessTime />,
      title: "Working Hours",
      details: ["Mon-Fri: 9:00 AM - 7:00 PM", "Sat: 9:00 AM - 5:00 PM"],
      color: "text-purple-500"
    }
  ];

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95%', sm: '90%', md: '800px' },
    maxHeight: '80vh',
    overflow: 'auto',
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} className='px-4'>
          {/* Contact Form Section */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Typography variant="h3" className="mb-6 font-bold text-gray-800">
                <span className='text-primary'>Get In</span> Touch
              </Typography>
              <Typography variant="body1" className="mb-8 text-gray-600">
                Have questions or ready to schedule an appointment? Fill out the form below and we'll get back to you as soon as possible.
              </Typography>
              <form className="space-y-4">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className="w-full md:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Paper elevation={3} className="p-8 bg-gray-50">
                <Typography variant="h4" className="mb-6 font-semibold text-gray-800">
                  Contact Information
                </Typography>
                <Grid container spacing={4}>
                  {contactInfo.map((info, index) => (
                    <Grid item xs={12} key={index}>
                      <Box className="flex items-start space-x-4">
                        {/* <Box className={`p-2 rounded-full bg-white shadow-md ${info.color}`}>
                          {info.icon}
                        </Box> */}
                        <Box className="text-start">
                          <Typography variant="h6" className="font-semibold text-gray-800">
                            {info.title}
                          </Typography>
                          {info.details.map((detail, idx) => (
                            <Typography key={idx} variant="body1" className="text-gray-600">
                              {detail}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>

              {/* Map Section */}
              <Paper elevation={3} className="mt-6 p-4">
                <Typography variant="h6" className="mb-4 font-semibold text-gray-800">
                  Find Us on Map
                </Typography>
                <Box className="w-full h-64 bg-gray-200 rounded-lg">
                  {/* Add your map component here */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Map will be integrated here
                  </div>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Emergency Contact Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 px-4"
        >
          <Paper elevation={3} className="p-6 bg-blue-50">
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="h5" className="font-semibold text-gray-800 mb-2">
                  Dental Emergency?
                </Typography>
                <Typography variant="body1" className="text-gray-600">
                  We offer 24/7 emergency dental services. Call our emergency hotline for immediate assistance.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className="text-center md:text-right">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<Phone />}
                  onClick={handleOpenEmergencyModal}
                >
                  Emergency Hotline
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>

      {/* Emergency Modal */}
      <Modal
        open={openEmergencyModal}
        onClose={handleCloseEmergencyModal}
        aria-labelledby="emergency-modal-title"
        aria-describedby="emergency-modal-description"
      >
        <Box sx={modalStyle}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <Box className="flex justify-between items-center mb-4">
              <Typography variant="h5" component="h2" className="text-primary font-bold flex items-center">
                <Phone className="mr-2" /> Emergency Dental Care
              </Typography>
              <IconButton onClick={handleCloseEmergencyModal} size="small">
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Main Content Container */}
            <Box className="flex flex-col md:flex-row gap-6">
              {/* Left Column */}
              <Box className="flex-1">
                {/* Emergency Contact Numbers */}
                <Box className="mb-4">
                  <Typography variant="h6" className="font-semibold mb-2">
                    24/7 Emergency Hotlines:
                  </Typography>
                  <Box className="flex gap-2 flex-col">
                    <Typography variant="body1" className="text-lg font-semibold text-primary">
                      Primary: +1 (555) 911-2345
                    </Typography>
                    <Typography variant="body1" className="text-lg font-semibold text-primary">
                      Backup: +1 (555) 911-6789
                    </Typography>
                  </Box>
                </Box>

                {/* Emergency Instructions */}
                <Box className="mb-4">
                  <Typography variant="h6" className="font-semibold mb-2">
                    What to Do in a Dental Emergency:
                  </Typography>
                  <Box className="grid grid-cols-1 gap-2">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Stay calm and call our emergency hotline</li>
                      <li>Keep knocked-out tooth moist</li>
                      <li>Apply pressure to stop bleeding</li>
                    </ul> 
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Take pain medication if needed</li>
                      <li>Have someone drive you</li>
                      <li>Bring any broken pieces</li>
                    </ul>
                  </Box>
                </Box>
              </Box>

              {/* Right Column */}
              <Box className="flex-1">
                {/* Emergency Location */}
                <Box className="mb-4">
                  <Typography variant="h6" className="font-semibold mb-2">
                    Emergency Clinic Location:
                  </Typography>
                  <Typography variant="body1" className="flex items-center">
                    <LocationOn className="mr-2 text-primary" />
                    123 Dental Street, City 12345
                  </Typography>
                </Box>

                {/* Additional Information */}
                <Box className="bg-blue-50 p-4 rounded-lg">
                  <Typography variant="body2" className="text-gray-600">
                    Our emergency team is available 24/7, including weekends and holidays. 
                    We aim to provide immediate care for severe dental pain, trauma, or any 
                    dental emergency that requires urgent attention.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Close Button */}
            <Box className="mt-4 text-right">
              <Button
                variant="contained"
                color="primary"
                onClick={handleCloseEmergencyModal}
                size="large"
              >
                Close
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Modal>
    </motion.div>
  );
};

export default Contact;
