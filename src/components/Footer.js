import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    {/* <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={'https://i1.wp.com/filecr.com/wp-content/uploads/2021/09/strong-workout-tracker-gym-log-logo.png'} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack> */}
    <Typography variant="h5" sx={{ pt: 5, fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made by PRIME Media</Typography>
  </Box>
);

export default Footer;
