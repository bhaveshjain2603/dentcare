import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'Our Dentists', path: '/dentists' },
    { title: 'Testimonials', path: '/testimonials' },
    { title: 'FAQ', path: '/faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar 
        position="fixed" 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg' 
            : 'bg-white/50 backdrop-blur-sm'
        }`}
      >
        <Container maxWidth="xl">
          <Toolbar className="justify-between py-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Typography
                component={Link}
                to="/"
                variant="h5"
                className="text-primary font-bold no-underline"
              >
                DentCare 
              </Typography>
            </motion.div>

            {/* Menu Icon for screens below 1120px */}
            <div className="block lg:hidden">
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </div>

            {/* Navigation Items for screens above 1120px */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    className={`rounded-lg px-4 ${
                      isActive(item.path)
                        ? 'text-primary bg-blue-50'
                        : 'text-gray-800 hover:text-primary'
                    }`}
                  >
                    {item.title}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  color="primary"
                  className="ml-4"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </Toolbar>
        </Container>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className="block lg:hidden"
          sx={{
            '& .MuiDrawer-paper': {
              width: '250px',
              boxSizing: 'border-box',
            },
          }}
        >
          <List className="pt-16">
            {navItems.map((item) => (
              <ListItem key={item.title} className="px-4">
                <Button
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  className={`w-full justify-start ${
                    isActive(item.path)
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.title}
                </Button>
              </ListItem>
            ))}
            <ListItem className="px-4">
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                color="primary"
                onClick={handleDrawerToggle}
                className="w-full"
              >
                Contact Us
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
      <Toolbar /> {/* Spacer for fixed navbar */}
    </motion.div>
  );
};

export default Navbar;
