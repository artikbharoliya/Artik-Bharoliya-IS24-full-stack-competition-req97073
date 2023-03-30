import React, { useState } from 'react';
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

  // const [loading, setLoading] = useState(true);
  const [productName, setProductName] = useState("");
  const [scrumMaster, setScrumMaster] = useState("");
  const [productOwner, setProductOwner] = useState("");
  const [developers, setDevelopers] = useState("");
  const [startDate, setStartDate] = useState(moment());
  const [methodology, setMethodology] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

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
              />
            </FormControl>
          </Grid>

          <Grid xs={12} item container justifyContent="center">
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <MultiInput placeHolder="Developers" />
            </FormControl>
          </Grid>

          <Grid xs={6} item container justifyContent="center">
            <FormControl sx={{ m: 1, width: '35ch' }} variant="filled">
              <DatePicker value={startDate} onChange={(newDate) => setStartDate(newDate)} />
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
          <Button type="submit" variant="contained" sx={{ my: 2 }}>Save profile</Button>
        </Grid>
      </DialogActions>
    </BootstrapDialog>
  );
}

export default ProductModal;
