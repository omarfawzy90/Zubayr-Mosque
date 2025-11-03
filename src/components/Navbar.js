import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import MosqueIcon from '@mui/icons-material/Mosque';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', mb: 0 }}>
      <Toolbar>
        <img 
          src='/icon.svg' 
          alt="Mosque Logo"
          style={{ 
            width: '40px', 
            height: '40px', 
            marginRight: '12px',
          }} 
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          مسجد الزُّبَيْرُ - Zubayr Mosque
        </Typography>
        <Box>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            onClick={() => setCurrentPage('home')}
            sx={{
              mr: 1,
              bgcolor: currentPage === 'home' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            startIcon={<InfoIcon />}
            onClick={() => setCurrentPage('info')}
            sx={{
              bgcolor: currentPage === 'info' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
            }}
          >
            About Zubayr
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;