import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const Settings = () => {
  const [tabValue, setTabValue] = useState(0);
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. John Smith', specialization: 'Orthodontist', experience: '10 years', email: 'john@example.com' },
    { id: 2, name: 'Dr. Jane Doe', specialization: 'Periodontist', experience: '8 years', email: 'jane@example.com' }
  ]);
  const [services, setServices] = useState([
    { id: 1, title: 'General Dentistry', description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.' },
    { id: 2, title: 'Cosmetic Dentistry', description: 'Transform your smile with whitening, veneers, and other aesthetic treatments.' }
  ]);
  const [openDoctorDialog, setOpenDoctorDialog] = useState(false);
  const [openServiceDialog, setOpenServiceDialog] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [editingService, setEditingService] = useState(null);
  const [doctorForm, setDoctorForm] = useState({
    name: '',
    specialization: '',
    experience: '',
    email: ''
  });
  const [serviceForm, setServiceForm] = useState({
    title: '',
    description: ''
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenDoctorDialog = (doctor = null) => {
    if (doctor) {
      setEditingDoctor(doctor);
      setDoctorForm(doctor);
    } else {
      setEditingDoctor(null);
      setDoctorForm({ name: '', specialization: '', experience: '', email: '' });
    }
    setOpenDoctorDialog(true);
  };

  const handleCloseDoctorDialog = () => {
    setOpenDoctorDialog(false);
    setEditingDoctor(null);
    setDoctorForm({ name: '', specialization: '', experience: '', email: '' });
  };

  const handleDoctorFormChange = (e) => {
    const { name, value } = e.target;
    setDoctorForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveDoctor = () => {
    if (editingDoctor) {
      setDoctors(prev => prev.map(doc => 
        doc.id === editingDoctor.id ? { ...doctorForm, id: doc.id } : doc
      ));
    } else {
      setDoctors(prev => [...prev, { ...doctorForm, id: Date.now() }]);
    }
    handleCloseDoctorDialog();
  };

  const handleDeleteDoctor = (id) => {
    setDoctors(prev => prev.filter(doc => doc.id !== id));
  };

  const handleOpenServiceDialog = (service = null) => {
    if (service) {
      setEditingService(service);
      setServiceForm(service);
    } else {
      setEditingService(null);
      setServiceForm({ title: '', description: '' });
    }
    setOpenServiceDialog(true);
  };

  const handleCloseServiceDialog = () => {
    setOpenServiceDialog(false);
    setEditingService(null);
    setServiceForm({ title: '', description: '' });
  };

  const handleServiceFormChange = (e) => {
    const { name, value } = e.target;
    setServiceForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveService = () => {
    if (editingService) {
      setServices(prev => prev.map(service => 
        service.id === editingService.id ? { ...serviceForm, id: service.id } : service
      ));
    } else {
      setServices(prev => [...prev, { ...serviceForm, id: Date.now() }]);
    }
    handleCloseServiceDialog();
  };

  const handleDeleteService = (id) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
        Settings
      </Typography>

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "fullWidth"}
          scrollButtons={isMobile ? "auto" : false}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Doctors" />
          <Tab label="Services" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">Manage Doctors</Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => handleOpenDoctorDialog()}
            >
              Add Doctor
            </Button>
          </Box>
          <List>
            {doctors.map((doctor) => (
              <React.Fragment key={doctor.id}>
                <ListItem>
                  <ListItemText
                    primary={doctor.name}
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="text.primary">
                          {doctor.specialization}
                        </Typography>
                        {" — "}{doctor.experience} • {doctor.email}
                      </>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => handleOpenDoctorDialog(doctor)} sx={{ mr: 1 }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => handleDeleteDoctor(doctor.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">Manage Services</Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => handleOpenServiceDialog()}
            >
              Add Service
            </Button>
          </Box>
          <List>
            {services.map((service) => (
              <React.Fragment key={service.id}>
                <ListItem>
                  <ListItemText
                    primary={service.title}
                    secondary={service.description}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => handleOpenServiceDialog(service)} sx={{ mr: 1 }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => handleDeleteService(service.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </TabPanel>
      </Paper>

      {/* Doctor Dialog */}
      <Dialog open={openDoctorDialog} onClose={handleCloseDoctorDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{editingDoctor ? 'Edit Doctor' : 'Add New Doctor'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={doctorForm.name}
                onChange={handleDoctorFormChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Specialization"
                name="specialization"
                value={doctorForm.specialization}
                onChange={handleDoctorFormChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Experience"
                name="experience"
                value={doctorForm.experience}
                onChange={handleDoctorFormChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={doctorForm.email}
                onChange={handleDoctorFormChange}
                required
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDoctorDialog}>Cancel</Button>
          <Button onClick={handleSaveDoctor} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Service Dialog */}
      <Dialog open={openServiceDialog} onClose={handleCloseServiceDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={serviceForm.title}
                onChange={handleServiceFormChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={serviceForm.description}
                onChange={handleServiceFormChange}
                required
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseServiceDialog}>Cancel</Button>
          <Button onClick={handleSaveService} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Settings;
