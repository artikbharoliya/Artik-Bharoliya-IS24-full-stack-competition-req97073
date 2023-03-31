import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import MultiInput from '../multiInput';
import { ProductsContext } from '../../context/ProductsContext';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const ProductModal = ({ open, setOpen, title }) => {

  const [products, setProducts] = useContext(ProductsContext);
  const [productName, setProductName] = useState("");
  const [scrumMaster, setScrumMaster] = useState("");
  const [productOwner, setProductOwner] = useState("");
  const [developers, setDevelopers] = useState("");
  const [startDate, setStartDate] = useState(moment());
  const [methodology, setMethodology] = useState("");
  const [disabled, setDisabled] = useState(true);

  const setProductStates = (product) => {
    setProductName(product?.productName);
    setScrumMaster(product?.scrumMasterName);
    setProductOwner(product?.productOwnerName);
    setDevelopers(product?.developers);
    setStartDate(moment(product?.startDate));
    setMethodology(product?.methodology);
  }
  useEffect(() => {
    const productFromLocalStorage = localStorage.getItem("products");
    if (productFromLocalStorage) {
      setProductStates(JSON.parse(productFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    setDisabled(!(productName && scrumMaster && productOwner && developers.length > 0 && startDate && methodology));
  }, [productName, scrumMaster, productOwner, developers, startDate, methodology]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProduct = async () => {
    console.log("Add product called");
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productName,
        scrumMasterName: scrumMaster,
        productOwnerName: productOwner,
        developers,
        startDate,
        methodology
      })
    })
    const product = await response.json();
    setProducts([...products, product]);
    setOpen(false);
    localStorage.setItem('products', JSON.stringify(null))
    console.log(response);
  }

  const handleBlur = () => {
    localStorage.setItem("products", JSON.stringify({
      productName,
      scrumMasterName: scrumMaster,
      productOwnerName: productOwner,
      developers,
      startDate,
      methodology
    }))
  }

  const clearForm = () => {
    setProductName('');
    setScrumMaster('');
    setProductOwner('');
    setDevelopers([]);
    setStartDate('');
    setMethodology('');
  }

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Grid xs={12} item container>
          <Grid xs={12} item container justifyContent="center">
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <TextField
                id="filled-basic"
                label="Product Name"
                variant="filled"
                value={productName}
                type="text"
                onChange={(e) => { setProductName(e.target.value) }}
                onBlur={handleBlur}
              />
            </FormControl>
          </Grid>
          <Grid xs={12} item container justifyContent="center">
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <TextField
                id="filled-basic"
                label="Scrum Master"
                variant="filled"
                type="text"
                value={scrumMaster}
                onChange={(e) => { setScrumMaster(e.target.value) }}
                onBlur={handleBlur}
              />
            </FormControl>
          </Grid>

          <Grid xs={12} item container justifyContent="center">
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <TextField
                id="filled-basic"
                label="Product Owner"
                variant="filled"
                value={productOwner}
                type="email"
                onChange={(e) => { setProductOwner(e.target.value) }}
                onBlur={handleBlur}
              />
            </FormControl>
          </Grid>

          <Grid xs={12} item container justifyContent="center">
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <MultiInput placeHolder="Developers" data={developers} setData={setDevelopers} onBlur={handleBlur} />
            </FormControl>
          </Grid>

          <Grid xs={6} item container justifyContent="center">
            <FormControl sx={{ m: 1, width: '35ch' }} variant="filled">
              <DatePicker value={startDate} onChange={(newDate) => setStartDate(newDate)} onBlur={handleBlur} />
            </FormControl>
          </Grid>


          <Grid xs={6} item container justifyContent="center">
            <FormControl sx={{ m: 1, width: '35ch' }} variant="filled">
              <InputLabel id="pet-species">Methodology</InputLabel>
              <Select
                labelId="pet-behaviors"
                id="pet-behaviors"
                value={methodology}
                label="Methodology"
                onChange={(e) => setMethodology(e.target.value)}
                onBlur={handleBlur}
              >
                <MenuItem value="Agile">Agile</MenuItem>
                <MenuItem value="Waterfall">Waterfall</MenuItem>
              </Select>
            </FormControl>
          </Grid>

        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid xs={12} item container justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ my: 2 }}
            disabled={disabled}
            onClick={handleAddProduct}>Add Product</Button>
          <Button
            variant="contained"
            sx={{ my: 2 }}
            onClick={clearForm}>Clear Form</Button>
        </Grid>
      </DialogActions>
    </BootstrapDialog>
  );
}

export default ProductModal;
