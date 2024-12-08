import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, Modal, TextField, Checkbox, FormControlLabel, FormGroup, MenuItem } from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [openCustomModal, setOpenCustomModal] = useState(false);
  const [customForm, setCustomForm] = useState({
    name: '',
    service: '',
    features: {
      regularCheckups: false,
      cleaning: false,
      xrays: false,
      fillings: false,
      rootCanal: false,
      whitening: false,
      crowns: false,
      implants: false
    }
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const plans = [
    {
      title: "Basic Care",
      price: "$99",
      period: "per month",
      features: [
        "Regular Check-ups",
        "Basic Cleaning",
        "X-Rays",
        "Cavity Fillings",
        "Emergency Care"
      ],
      color: "bg-blue-50",
      buttonVariant: "outlined"
    },
    {
      title: "Premium Care",
      price: "$199",
      period: "per month",
      features: [
        "All Basic Care features",
        "Deep Cleaning",
        "Root Canal Treatment",
        "Teeth Whitening",
        "Dental Crowns",
        "Priority Appointments"
      ],
      color: "bg-blue-600",
      buttonVariant: "contained",
      recommended: true
    },
    {
      title: "Family Plan",
      price: "$299",
      period: "per month",
      features: [
        "Up to 4 Family Members",
        "All Premium Care features",
        "Orthodontic Treatment",
        "Dental Implants",
        "Cosmetic Procedures",
        "24/7 Support"
      ],
      color: "bg-blue-50",
      buttonVariant: "outlined"
    }
  ];

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Orthodontics',
    'Pediatric Dentistry',
    'Oral Surgery',
    'Periodontics',
    'Endodontics',
    'Prosthodontics',
    'Dental Implants',
    'Emergency Dental Care'
  ];

  const handleOpenCustomModal = () => setOpenCustomModal(true);
  const handleCloseCustomModal = () => setOpenCustomModal(false);

  const handleCustomFormChange = (e) => {
    const { name, value } = e.target;
    setCustomForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureChange = (feature) => {
    setCustomForm(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: !prev.features[feature]
      }
    }));
  };

  const handleSubmitCustomPlan = (e) => {
    e.preventDefault();
    // Here you would typically send the custom plan to your backend
    console.log('Custom plan submitted:', { ...customForm, totalPrice });
    handleCloseCustomModal();
    setCustomForm({
      name: '',
      service: '',
      features: {
        regularCheckups: false,
        cleaning: false,
        xrays: false,
        fillings: false,
        rootCanal: false,
        whitening: false,
        crowns: false,
        implants: false
      }
    });
  };

  // Calculate total price based on selected features
  useEffect(() => {
    let price = 0;
    if (customForm.features.regularCheckups) price += 30;
    if (customForm.features.cleaning) price += 50;
    if (customForm.features.xrays) price += 70;
    if (customForm.features.fillings) price += 100;
    if (customForm.features.rootCanal) price += 300;
    if (customForm.features.whitening) price += 200;
    if (customForm.features.crowns) price += 500;
    if (customForm.features.implants) price += 1000;
    setTotalPrice(price);
  }, [customForm.features]);

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

  const featuresList = [
    { name: 'regularCheckups', label: 'Regular Check-ups', price: 30 },
    { name: 'cleaning', label: 'Professional Cleaning', price: 50 },
    { name: 'xrays', label: 'X-Rays', price: 70 },
    { name: 'fillings', label: 'Cavity Fillings', price: 100 },
    { name: 'rootCanal', label: 'Root Canal Treatment', price: 300 },
    { name: 'whitening', label: 'Teeth Whitening', price: 200 },
    { name: 'crowns', label: 'Dental Crowns', price: 500 },
    { name: 'implants', label: 'Dental Implants', price: 1000 }
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
          <span className='text-primary'>Transparent Pricing</span> Plans
          </Typography>
          <Typography variant="h6" className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Choose the perfect plan for your dental care needs. All plans include access to our state-of-the-art facilities
            and expert dental team.
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch" className="p-4">
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="h-full p-2"
              >
                <Card 
                  className={`h-full ${plan.recommended ? 'shadow-xl scale-105' : 'shadow-lg hover:shadow-xl'} 
                  transition-all duration-300`}
                >
                  <CardContent className={`p-6 ${plan.recommended ? 'bg-blue-600 text-white' : 'bg-blue-50'}`}>
                    <Typography variant="h5" className="font-bold mb-2">
                      {plan.title}
                    </Typography>
                    <Box className="flex items-baseline mb-4">
                      <Typography variant="h3" className="font-bold text-3xl sm:text-4xl">
                        {plan.price}
                      </Typography>
                      <Typography variant="subtitle1" className="ml-2">
                        {plan.period}
                      </Typography>
                    </Box>
                    {plan.recommended && (
                      <Typography 
                        variant="subtitle2" 
                        className="bg-blue-500 text-white px-4 py-1 rounded-full inline-block mb-4"
                      >
                        Recommended
                      </Typography>
                    )}
                  </CardContent>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckIcon className="text-green-500 mr-2" />
                          <Typography variant="body1" className="text-gray-700">
                            {feature}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={plan.buttonVariant}
                      color="primary"
                      fullWidth
                      size="large"
                      className="mt-6"
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <Box className="text-center md:text-left max-w-2xl">
            <Typography variant="h5" className="mb-4 text-gray-700">
              Need a Custom Plan?
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              Contact us to create a plan that perfectly fits your needs.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpenCustomModal}
            className="px-8 py-3 text-lg whitespace-nowrap"
          >
            Custom Plan
          </Button>
        </Box>

        {/* Custom Plan Modal */}
        <Modal
          open={openCustomModal}
          onClose={handleCloseCustomModal}
          aria-labelledby="custom-plan-modal-title"
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
                  Create Your Custom Plan
                </Typography>
                <Button 
                  onClick={handleCloseCustomModal}
                  color="primary"
                  className="min-w-0 p-1"
                >
                  <CloseIcon />
                </Button>
              </Box>

              {/* Custom Plan Form */}
              <form onSubmit={handleSubmitCustomPlan} className="space-y-6">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={customForm.name}
                  onChange={handleCustomFormChange}
                  required
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  select
                  label="Preferred Service"
                  name="service"
                  value={customForm.service}
                  onChange={handleCustomFormChange}
                  required
                  variant="outlined"
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>

                <Typography variant="h6" className="font-semibold mt-4 mb-2">
                  Select Your Features
                </Typography>

                <FormGroup className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {featuresList.map((feature) => (
                    <FormControlLabel
                      key={feature.name}
                      control={
                        <Checkbox
                          checked={customForm.features[feature.name]}
                          onChange={() => handleFeatureChange(feature.name)}
                          color="primary"
                        />
                      }
                      label={
                        <Box>
                          <Typography variant="body1">{feature.label}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            ${feature.price}/month
                          </Typography>
                        </Box>
                      }
                    />
                  ))}
                </FormGroup>

                <Box className="bg-blue-50 p-4 rounded-lg mt-4">
                  <Typography variant="h6" className="font-semibold text-center">
                    Estimated Total: ${totalPrice}/month
                  </Typography>
                </Box>

                <Box className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCloseCustomModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Create Custom Plan
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

export default Pricing;
