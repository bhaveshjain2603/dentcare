import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Modal, TextField, MenuItem } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openSupportModal, setOpenSupportModal] = useState(false);
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    service: '',
    query: ''
  });

  const handleOpenSupportModal = () => setOpenSupportModal(true);
  const handleCloseSupportModal = () => setOpenSupportModal(false);

  const handleSupportFormChange = (e) => {
    const { name, value } = e.target;
    setSupportForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    // Here you would typically send the query to your backend
    console.log('Query submitted:', supportForm);
    handleCloseSupportModal();
    setSupportForm({
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
      category: "General Questions",
      questions: [
        {
          question: "What should I expect during my first visit?",
          answer: "During your first visit, we'll conduct a comprehensive dental examination, including X-rays if needed. We'll review your medical history, discuss any concerns you may have, and create a personalized treatment plan."
        },
        {
          question: "How often should I visit the dentist?",
          answer: "We recommend visiting the dentist every 6 months for regular check-ups and professional cleaning. However, some patients may need more frequent visits based on their oral health needs."
        },
        {
          question: "Do you accept insurance?",
          answer: "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific insurance coverage."
        }
      ]
    },
    {
      category: "Treatment & Procedures",
      questions: [
        {
          question: "Is teeth whitening safe?",
          answer: "Yes, professional teeth whitening is safe when performed by qualified dental professionals. We use approved whitening products and customize the treatment to your needs."
        },
        {
          question: "How long do dental implants last?",
          answer: "With proper care and maintenance, dental implants can last a lifetime. Regular dental check-ups and good oral hygiene are essential for their longevity."
        },
        {
          question: "Is root canal treatment painful?",
          answer: "Modern root canal procedures are virtually painless thanks to advanced techniques and anesthesia. Most patients report feeling comfortable during and after the treatment."
        }
      ]
    },
    {
      category: "Emergency Care",
      questions: [
        {
          question: "What constitutes a dental emergency?",
          answer: "Dental emergencies include severe tooth pain, knocked-out teeth, broken teeth, lost fillings, and severe bleeding or injury to the mouth."
        },
        {
          question: "What should I do if I knock out a tooth?",
          answer: "Keep the tooth moist, preferably by placing it back in the socket. If that's not possible, put it in milk or hold it in your mouth and seek immediate dental care."
        }
      ]
    },
    {
      category: "Payment & Insurance",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, credit cards, and most major insurance plans. We also offer flexible payment plans and financing options for larger treatments."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer various financing options to help make dental care more affordable. Our team can discuss available payment plans during your visit."
        }
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
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <Typography variant="h3" className="mb-4 font-bold text-gray-800">
          <span className='text-primary'>Frequently Asked</span> Questions
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our dental services, procedures, and policies.
          </Typography>
        </motion.div>

        {faqs.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 * (categoryIndex + 1) }}
            className="mb-8"
          >
            <Typography variant="h4" className="mb-4 font-semibold text-2xl text-gray-800">
              {category.category}
            </Typography>
            {category.questions.map((faq, faqIndex) => (
              <Accordion
                key={faqIndex}
                className="mb-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className="hover:bg-gray-50"
                >
                  <Typography variant="h6" className="font-medium text-lg md:text-md text-gray-500">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" className="text-gray-600">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </motion.div>
        ))}

        <Box className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <Box className="text-center md:text-left max-w-2xl">
            <Typography variant="h5" className="mb-4 text-gray-700">
              Still Have Questions?
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              Can't find the answer you're looking for? Please contact our friendly team for assistance.
              We're here to help!
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpenSupportModal}
            className="px-8 py-3 text-lg whitespace-nowrap"
          >
            Contact Support
          </Button>
        </Box>

        {/* Support Modal */}
        <Modal
          open={openSupportModal}
          onClose={handleCloseSupportModal}
          aria-labelledby="support-modal-title"
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
                  Contact Support
                </Typography>
                <Button 
                  onClick={handleCloseSupportModal}
                  color="primary"
                  className="min-w-0 p-1"
                >
                  <CloseIcon />
                </Button>
              </Box>

              {/* Support Form */}
              <form onSubmit={handleSubmitQuery} className="space-y-4">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={supportForm.name}
                  onChange={handleSupportFormChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={supportForm.email}
                  onChange={handleSupportFormChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Your Query"
                  name="query"
                  value={supportForm.query}
                  onChange={handleSupportFormChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Please describe your question or concern..."
                />

                <Box className="flex justify-end space-x-3 pt-4">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCloseSupportModal}
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
    </motion.div>
  );
};

export default FAQ;
