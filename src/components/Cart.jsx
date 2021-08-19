import React, { useContext, useEffect, useState } from 'react';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { ProductCartContext } from "../context/productCart";
import { currencyFormatter } from '../helpers/currency';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    maxWidth: 700
  },
  spacer: {
    paddingTop: 80
  }
});

export default function Cart() {
  const { productsInCart, setProductsInCart } = useContext(ProductCartContext);
  const [totalCost, setTotalCost] = useState(0);
  const [uniqueCounts, setUniqueCounts] = useState();
  const classes = useStyles();

  // creating a set to remove duplicate items from the display
  const uniqueProducts = new Set(productsInCart);
  // counter tracks unique items to set and access later
  const counter = {};
  
  useEffect(() => {
    let localCost = 0;
    productsInCart.forEach(product => {
      // setTotalCost(prevCost => prevCost + product.price)
      localCost += product.price;
      let key = product.id;
      counter[key] = (counter[key] || 0) + 1;

    });
    setTotalCost(localCost);
    // make state accessible for count display below
    setUniqueCounts(counter);
  }, [])

  const decrementCount = item => {
    // TODO: Add decrement functionality by finding in state and removing
  }

  const incrementCount = item => {
    setProductsInCart(prevItems => prevItems.concat(item));
  }

  return (
    <>
    <TableContainer component={Paper} style={{ maxWidth: 700 }}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(uniqueProducts).map((item) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell>
                <div>
                <IconButton>
                  <RemoveCircle />
                </IconButton>
                {uniqueCounts && uniqueCounts[item.id]}
                <IconButton onClick={() => incrementCount(item)}>
                  <AddCircle />
                </IconButton>
                </div>
                </TableCell>
              <TableCell>${item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className={classes.spacer}/>
    <Typography>
      Total: {currencyFormatter(totalCost, "USD")}
    </Typography>
    </>
  );
}