import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Avatar, Rating, Button, Modal, TextField, MenuItem } from '@mui/material';
import { FormatQuote as QuoteIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import testimonial1 from '../img/testimonial-1.jpg';

const Testimonials = () => {
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    service: '',
    rating: 5,
    feedback: ''
  });

  const handleOpenFeedbackModal = () => setOpenFeedbackModal(true);
  const handleCloseFeedbackModal = () => setOpenFeedbackModal(false);

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', feedbackForm);
    handleCloseFeedbackModal();
    setFeedbackForm({
      name: '',
      service: '',
      rating: 5,
      feedback: ''
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

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Orthodontics',
    'Dental Implants',
    'Root Canal Treatment',
    'Teeth Whitening',
    'Dental Crown',
    'Dental Bridge',
    'Other'
  ];

  const testimonials = [
    {
      name: "Sarah Thompson",
      service: "Dental Implants",
      rating: 4,
      review: "Exceptional service! The staff was incredibly professional and caring. My dental implant procedure was smooth, and the results are amazing.",
      image: testimonial1
    },
    {
      name: "David Martinez",
      service: "Orthodontics",
      rating: 5,
      review: "The orthodontic treatment I received here was excellent. Dr. Chen made the whole process comfortable and the results exceeded my expectations!",
      image: testimonial1
    },
    {
      name: "Emily Parker",
      service: "Pediatric Dentistry",
      rating: 4,
      review: "Dr. Rodriguez is amazing with children! My kids actually look forward to their dental visits now. The staff is friendly and the facility is so welcoming.",
      image: testimonial1
    },
    {
      name: "Michael Brown",
      service: "Oral Surgery",
      rating: 5,
      review: "Had a complex dental surgery with Dr. Wilson. His expertise and attention to detail are remarkable. The recovery was smooth and the results are fantastic.",
      image: testimonial1
    },
    {
      name: "Lisa Anderson",
      service: "Cosmetic Dentistry",
      rating: 5,
      review: "The teeth whitening treatment here gave me amazing results. The staff was professional and made sure I was comfortable throughout the procedure.",
      image: testimonial1
    },
    {
      name: "Robert Chen",
      service: "General Dentistry",
      rating: 4,
      review: "Best dental experience I've ever had! The team is thorough, gentle, and really cares about their patients' comfort and well-being.",
      image: testimonial1
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <Typography variant="h3" className="mb-4 font-bold text-gray-800">
            Patient <span className='text-primary'>Testimonials</span>
          </Typography>
          <Typography variant="h6" className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Read what our patients have to say about their experiences at DentCare Clinic.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Box className="flex items-center mb-4">
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="mr-4"
                      />
                      <Box>
                        <Typography variant="h6" className="font-semibold">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {testimonial.service}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly className="mb-4" />
                    <Typography variant="body1" className="text-gray-600 relative">
                      <QuoteIcon className="text-primary opacity-20 absolute -top-2 -left-2 transform scale-150" />
                      <span className="relative z-10">{testimonial.review}</span>
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <Box className="text-center md:text-left max-w-2xl">
            <Typography variant="h5" className="mb-4 text-gray-700">
              Share Your Experience
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              We value your feedback! If you've been a patient at DentCare Clinic, we'd love to hear about your experience.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpenFeedbackModal}
            className="px-8 py-3 text-lg whitespace-nowrap"
          >
            Share Feedback
          </Button>
        </Box>

        {/* Feedback Modal */}
        <Modal
          open={openFeedbackModal}
          onClose={handleCloseFeedbackModal}
          aria-labelledby="feedback-modal-title"
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
                  Share Your Experience
                </Typography>
                <Button 
                  onClick={handleCloseFeedbackModal}
                  color="primary"
                  className="min-w-0 p-1"
                >
                  <CloseIcon />
                </Button>
              </Box>

              {/* Feedback Form */}
              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={feedbackForm.name}
                  onChange={handleFeedbackChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  select
                  label="Service Used"
                  name="service"
                  value={feedbackForm.service}
                  onChange={handleFeedbackChange}
                  required
                  variant="outlined"
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>

                <Box className="space-y-2">
                  <Typography variant="body1" className="font-medium">
                    Rate your experience
                  </Typography>
                  <Rating
                    name="rating"
                    value={feedbackForm.rating}
                    onChange={(event, newValue) => {
                      setFeedbackForm(prev => ({
                        ...prev,
                        rating: newValue
                      }));
                    }}
                    size="large"
                  />
                </Box>

                <TextField
                  fullWidth
                  label="Your Feedback"
                  name="feedback"
                  value={feedbackForm.feedback}
                  onChange={handleFeedbackChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Share your experience with us..."
                />

                <Box className="flex justify-end space-x-3 pt-4">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCloseFeedbackModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit Feedback
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

export default Testimonials;
