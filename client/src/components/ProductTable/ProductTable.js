import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext, useEffect, useState } from 'react';
import './productTable.css'
import { ProductsContext } from '../../context/ProductsContext';
import { Button } from '@mui/material';
import ProductModal from '../productModal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const formatDate = (date) => {
  let dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US");
}


const ProductTable = () => {

  const [products] = useContext(ProductsContext);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(products);

  useEffect(() => {
    console.log(products);
    if (products.length > 0) setLoading(false);
  }, [products]);

  if (loading) {
    return (
      <div>Loading</div>
    );
  } else {
    return (
      <div className="product-table">
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell align="left">Scrum Master</StyledTableCell>
                <StyledTableCell align="left">Product Owner</StyledTableCell>
                <StyledTableCell align="left">Developers</StyledTableCell>
                <StyledTableCell align="left">Start Date</StyledTableCell>
                <StyledTableCell align="left">Methodology</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((product) => (
                <StyledTableRow key={product?.productName}>
                  <StyledTableCell component="th" scope="row">
                    {product?.productName}
                  </StyledTableCell>
                  <StyledTableCell align="left">{product?.scrumMasterName}</StyledTableCell>
                  <StyledTableCell align="left">{product?.productOwnerName}</StyledTableCell>
                  <StyledTableCell align="left">{product?.developers}</StyledTableCell>
                  <StyledTableCell align="left">{formatDate(product?.startDate)}</StyledTableCell>
                  <StyledTableCell align="left">{product?.methodology}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Button variant="outlined" onClick={() => setIsModalOpen(!isModalOpen)}>Edit</Button>
                    <ProductModal open={isModalOpen} setOpen={setIsModalOpen} title="Edit Product" buttonTitle="Edit Product" productId={product._id} customAction={() => { console.log("Custome action called") }} />
                  </StyledTableCell>
                  <StyledTableCell align="left">Delete</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );

  }
}

export default ProductTable;
