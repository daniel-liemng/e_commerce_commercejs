import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Cart = () => {
  const classes = useStyles();

  const isEmpty = true;

  // Like Sub-Component
  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items in your shopping cart, start adding some!
    </Typography>
  );

  // Like Sub-Component
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        filled
      </Grid>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h3'>
        Your Shopping Cart
      </Typography>

      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
