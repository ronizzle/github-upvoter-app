import Box from '@mui/material/Box';

const Bullet = () => {
  return (<Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>)
};

export default Bullet;
