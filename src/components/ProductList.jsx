import React, { useEffect, useState, useContext } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { DATA as products } from "../mockData/mockData";
import Product from "./Product";
import { ProductCartContext } from "../context/productCart";

const useStyles = makeStyles({
  container: {
    paddingLeft: "16px",
    paddingRight: "16px"
  }
})

export default function ProductList() {
  const { setProductsInCart } = useContext(ProductCartContext);
  const [availableProducts, addProducts] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    /*
    Typically I would make the fetch below to get the list of 
    available products then set the state of available products:
    fetch(http://auddiashopping.com/products).then(response => response.json).then(data => addProducts(data))
    */

    addProducts(products);
  }, [])

  const addProductToCart = (item) => {
    setProductsInCart(prevState => prevState.concat(item))
  }
  
  return (
    <Grid container spacing={4} className={classes.container}>
      {availableProducts.map((product, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Product item={product} addProductToCart={addProductToCart} />
          </Grid>
        )
      })}
    </Grid>
  )
}