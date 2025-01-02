import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';

const AdminNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
    { text: 'Appointments', icon: <CalendarTodayIcon />, path: '/admin/appointments' },
    { text: 'Patients', icon: <PeopleIcon />, path: '/admin/patients' },
    { text: 'Dentists', icon: <LocalHospitalIcon />, path: '/admin/dentists' },
    { text: 'Billing', icon: <ReceiptIcon />, path: '/admin/billing' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/admin/settings' }
  ];

  return (
    <Paper elevation={2} sx={{ height: '100%', p: 2 }}>
      <Typography variant="h6" sx={{ mb: 3, px: 2, fontWeight: 600 }}>
        Admin Panel
      </Typography>
      <List>
        {menuItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <ListItem
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                borderRadius: 1,
                mb: 1,
                color: isActive ? 'white' : 'inherit',
                bgcolor: isActive ? 'primary.main' : 'transparent',
                '&:hover': {
                  bgcolor: isActive ? 'primary.dark' : 'action.hover',
                },
              }}
            >
              <ListItemIcon sx={{ color: isActive ? 'white' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default AdminNav;
