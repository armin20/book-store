import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import AddIcon from '@mui/icons-material/Add';

export default function Header(props) {
  function addBook(event) {
    props.parentCallback(event);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{
        color: "white",
        backgroundColor: "#5d636f",
      }} position="static">
        <Toolbar>
          <BookIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 0 }}>
            Book Store
          </Typography>

          <Button onClick={() => addBook(true)} color="inherit"><AddIcon /> Book</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}