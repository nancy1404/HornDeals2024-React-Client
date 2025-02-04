import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'
import carrot from '../assets/images/carrot.png'

const Navbar = () => {
  const navigate = useNavigate()
  const handleProfileClick = () => {
    navigate('/profile/')
  }
  const handleIconClick = () => {
    navigate('/home/')
  }
  const handleProductsClick = () => {
    navigate('/products/')
  }
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: '1px solid #ddd' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side: Logo and name */}
        <Box display="flex" alignItems="center" onClick={handleIconClick}>
          <Box
            component="img"
            sx={{
              height: 50,
              width: 50,
              margin: 1,
            }}
            alt="carrot icon"
            src={carrot}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#FF7E35' }}
          >
            UT 당근
          </Typography>
        </Box>

        {/* Center: Navigation Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
              color="inherit"
              sx={{ color: '#333', fontWeight: 'bold' }}
              onClick={handleProductsClick}
          >
            Home
          </Button>
          <Button color="inherit" sx={{ color: '#333', fontWeight: 'bold' }}>
            Shop
          </Button>
          <Button color="inherit" sx={{ color: '#333', fontWeight: 'bold' }}>
            About
          </Button>
          <Button color="inherit" sx={{ color: '#333', fontWeight: 'bold' }}>
            Contact
          </Button>
        </Box>

        {/* Right side: Search bar and button */}
        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            sx={{ bgcolor: '#f7f7f7', borderRadius: '5px', mr: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            sx={{ fontWeight: 'bold', color: '#333' }}
            onClick={handleProfileClick}
          >
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
