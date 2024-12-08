import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box className="min-h-screen">
        {/* Hero Section */}
        <Box className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-20">
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Typography variant="h2" className="mb-4 font-bold">
                    Welcome to DentCare Clinic
                  </Typography>
                  <Typography variant="h5" className="mb-6">
                    Your Trusted Partner in Dental Health
                  </Typography>
                  <Typography variant="body1" className="mb-8">
                    We provide comprehensive dental care with state-of-the-art technology and a gentle touch.
                    Your smile is our priority!
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="/images/dental-hero.jpg"
                  alt="Dental Care"
                  className="w-full rounded-lg shadow-xl"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Features Section */}
        <Box className="py-16">
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <motion.div
                  className="text-center p-6 bg-white rounded-lg shadow-lg"
                  whileHover={{ y: -10 }}
                >
                  <Typography variant="h5" className="mb-4 font-semibold">
                    Expert Dentists
                  </Typography>
                  <Typography>
                    Our team of experienced dentists provides the highest quality care using the latest techniques.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div
                  className="text-center p-6 bg-white rounded-lg shadow-lg"
                  whileHover={{ y: -10 }}
                >
                  <Typography variant="h5" className="mb-4 font-semibold">
                    Modern Technology
                  </Typography>
                  <Typography>
                    We use state-of-the-art equipment and advanced procedures for the best possible results.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div
                  className="text-center p-6 bg-white rounded-lg shadow-lg"
                  whileHover={{ y: -10 }}
                >
                  <Typography variant="h5" className="mb-4 font-semibold">
                    Comfortable Care
                  </Typography>
                  <Typography>
                    Your comfort is our priority. We ensure a relaxing and pain-free experience.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Home;
