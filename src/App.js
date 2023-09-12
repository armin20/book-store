import { useState } from 'react';
import './App.css';
import Header from './components/header';
import MainPage from "./components/mainPage"
import { Modal, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
const { addBook } = require('./redux/action')


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const handleCallback = (data) => {
    setOpenModal(data);
  }

  const handleClose = (e) => {
    setOpenModal(false)
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ name: name, price: price, category: category, description: desc }));
    setCategory("");
    setDesc("");
    setName("");
    setPrice("");
    setOpenModal(false);
  }

  return (
    <div className="App">
      <Header parentCallback={handleCallback} />
      <MainPage />
      <Modal
        open={openModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={handleClose}
      >
        <div style={{
          backgroundColor: "white",
          color: "white",
          padding: "10px 18px",
          outline: "none",
          borderRadius: "1%",
        }}>
          <form>
            <TextField label="Name" value={name} variant="outlined" fullWidth onChange={handleNameChange} style={{
              margin: "10px"
            }} />
            <TextField label="Category" value={category} variant="outlined" onChange={handleCategoryChange} fullWidth style={{
              margin: "10px",

            }} />
            <TextField label="Price" value={price} variant="outlined" onChange={handlePriceChange} fullWidth style={{
              margin: "10px",

            }} />
            <TextField label="Description" value={desc} variant="outlined" onChange={handleDescChange} fullWidth style={{
              margin: "10px",

            }} />
            <Button variant="contained" style={{ backgroundColor: "#333841", margin: "4px" }} onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
