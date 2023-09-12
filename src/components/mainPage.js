import React, { useEffect, useState } from "react";
import { Card, TextField, CardContent, CardActions, Typography, Button, Modal } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
const { addBook, deleteBook, updateBook } = require('../redux/action.js')

export default function BasicCard(props) {
  const [openModal, setOpenModal] = useState(false);
  // const [listOfBooks, setListOfBooks] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [desc, setDesc] = useState();
  const [id, setId] = useState();
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.data);


  // You can continue adding more books as needed

  // const url = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json"

  // const params = {
  //   "api-key": "ukOqkdysqIcV9JJz8YfGCEAVpZyoAitf", // Include your API key as a query parameter
  // };
  // const getListOfBooks = async () => {
  //   const { data } = await axios.get(url, { params: params })

  //   setListOfBooks(data.results.lists);
  // };

  const handleCardClick = (data, id) => {
    setId(id);
    setName(data.name);
    setCategory(data.category);
    setDesc(data.description);
    setPrice(data.price);
    setOpenModal(true);
  };



  const deleteBookById = (data) => {
    dispatch(deleteBook({ name: data.name, price: data.price, category: data.category, description: data.description }));
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
    dispatch(updateBook({ id: id, name: name, price: price, category: category, description: desc }));
    setCategory("");
    setDesc("");
    setName("");
    setPrice("");
    setOpenModal(false);
  }

  const handleClose = (e) => {
    setOpenModal(false)
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      padding: "50px",
      rowGap: "20px",
      columnGap: "20px"
    }}>
      {booksList.map((index, id) => (
        <Card key={id} style={{
          cursor: "pointer",
          padding: "2px"
        }}>
          <CardContent onClick={() => handleCardClick(index, id)}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {index.category}
            </Typography>
            <Typography sx={{ fontSize: 22 }} variant="h6" component="div">
              {index.name}
            </Typography>
            <Typography color="text.secondary">
              {index.price}
            </Typography>
            <Typography>
              {index.description}
            </Typography>
          </CardContent>
          <Button onClick={() => deleteBookById(index)}><DeleteIcon />Delete</Button>
        </Card>
      ))}

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