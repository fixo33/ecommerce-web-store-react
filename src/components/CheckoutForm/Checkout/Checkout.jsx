import React, { useEffect, useState } from "react";
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { commerce } from "../../../lib/commerce";
import styles from "./styles";
import useClasses from "../../../useClasses";

import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const classes = useClasses(styles);
  const history = useNavigate();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: "cart" });
        setCheckoutToken(token);
      } catch (error) {
        history("/");
        console.error("generateToken error", error);
      }
    };
    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  const Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">
          Back to Home
        </Button>
      </>
    ) : isFinished ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase</Typography>
          <Divider className={classes.divider} />
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">
          Back to Home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    return (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">
          Back to Home
        </Button>
      </>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeout={timeout} />
    );

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
