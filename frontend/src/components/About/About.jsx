import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: "Expert Team",
      description: "Our team of highly qualified dentists and specialists brings decades of combined experience in all aspects of dentistry. Each member is committed to ongoing education to stay at the forefront of dental innovations."
    },
    {
      title: "Modern Technology",
      description: "We utilize advanced digital imaging, 3D scanning, and the latest dental technologies to provide precise diagnostics and comfortable treatments. Our modern equipment ensures efficient and minimally invasive procedures."
    },
    {
      title: "Comprehensive Care",
      description: "From routine check-ups to complex procedures, we offer a full range of dental services under one roof. Our integrated approach ensures coordinated care for all your dental needs."
    },
    {
      title: "Patient Comfort",
      description: "We understand dental anxiety and prioritize your comfort. Our caring staff, relaxing environment, and gentle approach help make your dental visits as pleasant as possible."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" className="text-center font-bold mb-4">
          <span className='text-primary'>About</span> Us
        </Typography>
        
        <Typography variant="body1" className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          At DentCare, we're more than just a dental clinic – we're your partners in achieving optimal oral health. 
          Our modern facility combines state-of-the-art technology with compassionate care to provide an exceptional 
          dental experience. With over two decades of service, we continue to prioritize patient comfort, 
          quality care, and lasting results.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Typography variant="h5" className="mb-3 font-semibold text-primary">
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default About;
