import React from "react";
import ProductList from "./ProductList";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  spacer: {
    paddingTop: 120
  }
})

export default function Main() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.spacer} />
    <ProductList />
    </>
  );
}