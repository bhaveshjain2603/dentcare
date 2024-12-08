import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Phone, Email, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const sections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Our Dentists", href: "#dentists" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "General Dentistry", href: "#" },
        { name: "Cosmetic Dentistry", href: "#" },
        { name: "Orthodontics", href: "#" },
        { name: "Pediatric Dentistry", href: "#" },
        { name: "Emergency Care", href: "#" }
      ]
    },
    {
      title: "Contact Info",
      content: [
        { icon: <Phone className="text-primary" />, text: "+1 (555) 123-4567" },
        { icon: <Email className="text-primary" />, text: "info@dentcare.com" },
        { icon: <LocationOn className="text-primary" />, text: "123 Dental Street, City 12345" }
      ]
    }
  ];

  const socialIcons = [
    { icon: <Facebook />, label: "Facebook", href: "#" },
    { icon: <Twitter />, label: "Twitter", href: "#" },
    { icon: <LinkedIn />, label: "LinkedIn", href: "#" },
    { icon: <Instagram />, label: "Instagram", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-6">
      <Container maxWidth="lg" className="px-4 sm:px-6 lg:px-8">
        <Grid container spacing={{ xs: 6, lg: 6 }} className="mb-12">
          {sections.map((section, index) => (
            <Grid item xs={12} lg={4} key={index} className="flex justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Typography 
                  variant="h6" 
                  className="mb-6 text-lg font-semibold border-b-2 border-primary inline-block pb-2"
                >
                  {section.title}
                </Typography>
                {section.links && (
                  <ul className="space-y-3 w-full">
                    {section.links.map((link, idx) => (
                      <motion.li 
                        key={idx}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex justify-center"
                      >
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                          underline="none"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                )}
                {section.content && (
                  <ul className="space-y-4 w-full">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-3 text-sm sm:text-base">
                        <Box className="text-primary">{item.icon}</Box>
                        <span className="text-gray-300">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box className="pt-8 border-t border-gray-700">
          <Grid container spacing={4} className="items-center">
            <Grid item xs={12} lg={6} className="text-center">
              <Typography variant="body2" className="text-gray-400 mb-4 lg:mb-0">
                &copy; {new Date().getFullYear()} DentCare Clinic. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className="flex justify-center space-x-3">
                {socialIcons.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      href={social.href}
                      aria-label={social.label}
                      className="text-gray-400 hover:text-primary transition-colors duration-200"
                      size="medium"
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
