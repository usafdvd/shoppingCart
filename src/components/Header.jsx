import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, makeStyles, MenuItem } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useHistory, Link } from "react-router-dom";
import { ProductCartContext } from "../context/productCart";

const useStyles = makeStyles({
  toolbarContainer: {
    flex: 1,
    justifyContent: "space-between"
  }
})

export default function Header() {
  const { productsInCart } = useContext(ProductCartContext);
  const history = useHistory();
  const classes = useStyles();

  return (
    <AppBar position="sticky" data-testid="app-bar">
    <Toolbar className={classes.toolbarContainer}>
        <MenuItem component={Link} to={"/"}>
          <Typography variant="h6">Auddia Shopping</Typography>
        </MenuItem>
      <IconButton onClick={() => history.push("/cart")}>
        <Badge badgeContent={productsInCart.length}>
          <ShoppingCart />
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
  );
}