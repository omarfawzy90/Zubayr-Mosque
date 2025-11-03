import React from 'react';
import { Box, Container, Typography, Divider, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 2,
        background: 'linear-gradient(135deg, #1F4A3D 0%, #2E7D32 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 2 }} />
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Copyright and Developer Info */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              © {new Date().getFullYear()} Zubayr Mosque - مسجد الزُّبَيْر
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 0.5 }}>
              Developed with <FavoriteIcon sx={{ fontSize: 16, color: 'secondary.main' }} /> by 
              <Typography component="span" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                Omar Fawzy
              </Typography>
            </Typography>
          </Box>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              size="small"
              sx={{
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              }}
              href="https://github.com/omarfawzy90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              }}
              href="https://omarfawzy.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LanguageTwoToneIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}