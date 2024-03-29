const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%!important",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px!important",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px!important",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default styles;
