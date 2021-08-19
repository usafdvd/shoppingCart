import React from "react";
import { Card, CardContent, CardActions, Button, Typography, makeStyles, Hidden } from "@material-ui/core";
import { currencyFormatter } from "../helpers/currency";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxHeight: 400,
    minHeight: 350
  },
  title: {
    alignContent: "center"
  },
  body: {
    alignSelf: "end",
    textAlign: "center",
    maxHeight: 200,
    overflow: "auto"
  },
  actions: {
    display: "flex",
    justifyContent: "space-between"
  }
})

export default function Product({ item, addProductToCart }) {
  const classes = useStyles();
  // having to use dangerouslySet due to formatting coming from backend. Do not use for user input, open to XSS hacking
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  const handleClick = event => {
    event.preventDefault();
    addProductToCart(item);
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          {item.name}
        </Typography>
        <Typography className={classes.body}>
          {renderHTML(item.description)}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Hidden mdDown>
        <Typography>
          {item.vendor.name}
        </Typography>
        </Hidden>
        <Typography>
          {currencyFormatter(item.price, item.currency)}
        </Typography>
        <Button
          onClick={handleClick}
          data-testid={`add-product-${item.id}`}
          disabled={!item.in_stock}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}