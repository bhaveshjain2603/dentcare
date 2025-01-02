import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button, Modal, TextField, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg';

const Dentists = () => {
  const [openJoinModal, setOpenJoinModal] = useState(false);
  const [joinForm, setJoinForm] = useState({
    name: '',
    email: '',
    experience: ''
  });

  const handleOpenJoinModal = () => setOpenJoinModal(true);
  const handleCloseJoinModal = () => setOpenJoinModal(false);

  const handleJoinFormChange = (e) => {
    const { name, value } = e.target;
    setJoinForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Here you would typically send the application to your backend
    console.log('Application submitted:', joinForm);
    handleCloseJoinModal();
    setJoinForm({
      name: '',
      email: '',
      experience: ''
    });
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: '500px' },
    maxHeight: '90vh',
    overflow: 'auto',
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
    p: 4,
  };

  const dentists = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist",
      specialty: "Cosmetic Dentistry",
      experience: "15+ years",
      education: "DDS, Harvard School of Dental Medicine",
      image: team1,
      bio: "Dr. Johnson specializes in cosmetic dentistry and has transformed thousands of smiles throughout her career.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      specialty: "Orthodontics",
      experience: "12+ years",
      education: "DMD, University of Pennsylvania",
      image: team2,
      bio: "Dr. Chen is an expert in orthodontics and is known for his gentle approach with patients of all ages.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatric Dentist",
      specialty: "Pediatric Dentistry",
      experience: "10+ years",
      education: "DDS, UCLA School of Dentistry",
      image: team3,
      bio: "Dr. Rodriguez has a special way with children and makes dental visits fun and stress-free.",
    },
    {
      name: "Dr. James Wilson",
      role: "Oral Surgeon",
      specialty: "Oral Surgery",
      experience: "18+ years",
      education: "DMD, Boston University",
      image: team4,
      bio: "Dr. Wilson is a highly skilled oral surgeon with expertise in complex dental procedures.",
    },
    {
      name: "Dr. Olivia Martinez",
      role: "Periodontist",
      specialty: "Gum Disease Treatment",
      experience: "14+ years",
      education: "DDS, Columbia University College of Dental Medicine",
      image: team1,
      bio: "Dr. Martinez is an expert in treating gum disease and restoring the health of gums with advanced techniques.",
    },
    {
      name: "Dr. David Thompson",
      role: "Prosthodontist",
      specialty: "Restorative Dentistry",
      experience: "20+ years",
      education: "DDS, University of Michigan School of Dentistry",
      image: team2,
      bio: "Dr. Thompson specializes in restorative dentistry, helping patients regain function and confidence with dental implants and prosthetics.",
    },
    {
      name: "Dr. Sophia Patel",
      role: "Endodontist",
      specialty: "Root Canal Therapy",
      experience: "11+ years",
      education: "DDS, NYU College of Dentistry",
      image: team3,
      bio: "Dr. Patel is known for her precision and expertise in performing painless root canal treatments.",
    },
    {
      name: "Dr. Robert Green",
      role: "Dental Hygienist",
      specialty: "Preventative Care",
      experience: "8+ years",
      education: "RDH, University of Southern California",
      image: team4,
      bio: "Dr. Green is passionate about preventative care and helping patients maintain healthy, beautiful smiles.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4"
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <Typography variant="h3" className="mb-4 font-bold text-gray-800">
            Meet Our <span className='text-primary'>Expert Dentists</span>
          </Typography>
          <Typography variant="h6" className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto">
            Our team of experienced dental professionals is committed to providing you with the highest quality care
            and beautiful, healthy smiles.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {dentists.map((dentist, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <Grid container>
                    <Grid item xs={12} md={5}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={dentist.image}
                        alt={dentist.name}
                        className="h-full object-cover"
                      />
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <CardContent className="p-6">
                        <Typography variant="h5" className="font-bold mb-2">
                          {dentist.name}
                        </Typography>
                        <Typography variant="subtitle1" className="text-primary mb-2">
                          {dentist.role}
                        </Typography>
                        <Typography variant="body2" className="text-gray-600 mb-4">
                          {dentist.specialty} • {dentist.experience}
                        </Typography>
                        <Typography variant="body2" className="text-gray-600 mb-2">
                          {dentist.education}
                        </Typography>
                        <Typography variant="body1" className="mb-4">
                          {dentist.bio}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <Box className="text-center md:text-left max-w-2xl">
            <Typography variant="h5" className="mb-4 text-gray-700">
              Join Our Team
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              We're always looking for talented dental professionals to join our team. If you're passionate about
              providing exceptional dental care, we'd love to hear from you.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpenJoinModal}
            className="px-8 py-3 text-lg whitespace-nowrap"
          >
            Join Team
          </Button>
        </Box>

        {/* Join Team Modal */}
        <Modal
          open={openJoinModal}
          onClose={handleCloseJoinModal}
          aria-labelledby="join-modal-title"
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
                  Join Our Amazing Team
                </Typography>
                <IconButton 
                  onClick={handleCloseJoinModal}
                  color="primary"
                  className="min-w-0 p-1"
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Welcome Message */}
              <Typography variant="body1" className="text-gray-600 mb-6">
                Welcome to the first step of an exciting journey! At DentCare, we believe in creating smiles 
                that last a lifetime. Join our passionate team and be part of something special. ✨
              </Typography>

              {/* Application Form */}
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={joinForm.name}
                  onChange={handleJoinFormChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={joinForm.email}
                  onChange={handleJoinFormChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Work Experience"
                  name="experience"
                  value={joinForm.experience}
                  onChange={handleJoinFormChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Tell us about your dental experience, specializations, and what makes you passionate about dentistry..."
                />

                <Box className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCloseJoinModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit Application
                  </Button>
                </Box>
              </form>
            </motion.div>
          </Box>
        </Modal>
      </Container>
    </motion.div>
  );
};

export default Dentists;
