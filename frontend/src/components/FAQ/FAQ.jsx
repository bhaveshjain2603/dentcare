import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, TextField } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    query: ''
  });

  const handleOpenContactModal = () => setOpenContactModal(true);
  const handleCloseContactModal = () => setOpenContactModal(false);

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    // Here you would typically send the query to your backend
    console.log('Query submitted:', contactForm);
    handleCloseContactModal();
    setContactForm({
      name: '',
      email: '',
      query: ''
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

  const faqs = [
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans. Please contact our office to verify if we accept your specific insurance provider."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every 6 months for regular check-ups and cleanings. However, some patients may need more frequent visits based on their oral health needs."
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer: "In case of a dental emergency, contact our office immediately. We offer emergency dental services and will do our best to see you as soon as possible."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer various payment plans and financing options to help make dental care more affordable. Please discuss with our staff for more details."
    },
    {
      question: "What age should children start visiting the dentist?",
      answer: "We recommend children have their first dental visit by their first birthday or when their first tooth appears, whichever comes first."
    },
    {
      question: "How long does a typical appointment take?",
      answer: "A routine check-up and cleaning typically takes about 45-60 minutes. More complex procedures may require longer appointments."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <Container maxWidth="lg" className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Typography 
            variant="h3" 
            component="h2" 
            className="text-gray-800 font-bold mb-4 g:text-5xl"
          >
            Frequently Asked <span className='text-primary'>Questions</span>
          </Typography>
          <Typography 
            variant="body1" 
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Find answers to common questions about our dental services and policies
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4"
            >
              <Accordion 
                className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                sx={{
                  '&:before': {
                    display: 'none',
                  },
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-primary" />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  className="hover:bg-gray-50"
                >
                  <Typography 
                    variant="h6" 
                    className="text-gray-800 text-sm sm:text-base font-medium"
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-white">
                  <Typography 
                    variant="body1" 
                    className="text-gray-600 text-sm sm:text-base"
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

        <Box className="flex flex-col items-center gap-4 mt-12">
          <Typography 
            variant="body2" 
            className="text-gray-500 font-semibold text-sm sm:text-base"
          >
            Still have questions? Feel free to contact us
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpenContactModal}
            className="px-8 py-3 text-lg"
          >
            Contact Us
          </Button>
        </Box>

        {/* Contact Modal */}
        <Modal
          open={openContactModal}
          onClose={handleCloseContactModal}
          aria-labelledby="contact-modal-title"
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
                  Contact Us
                </Typography>
                <Button 
                  onClick={handleCloseContactModal}
                  color="primary"
                  className="min-w-0 p-1"
                >
                  <CloseIcon />
                </Button>
              </Box>

              {/* Welcome Message */}
              <Typography variant="body1" className="text-gray-600 mb-6">
                Have a question? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
              </Typography>

              {/* Contact Form */}
              <form onSubmit={handleSubmitQuery} className="space-y-4">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactFormChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleContactFormChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Your Query"
                  name="query"
                  value={contactForm.query}
                  onChange={handleContactFormChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Please describe your question in detail..."
                />

                <Box className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCloseContactModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit Query
                  </Button>
                </Box>
              </form>
            </motion.div>
          </Box>
        </Modal>
      </Container>
    </section>
  );
};

export default FAQ;
