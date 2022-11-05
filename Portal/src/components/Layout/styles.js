import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100vw - 260px)`,
    minHeight: "100vh",
  },
  contentShift: {
    width: `calc(100vw - ${260 + theme.spacing(6)}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  link: {
    '&:not(:first-child)': {
      paddingLeft: 15
    }
  },
  footer: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    padding: "1rem",
    marginTop: "1rem",
    position: "fixed",
    bottom: 0,
    color: "white",
    backgroundColor: "#1e40fd",
    width: "100%",
    zIndex: 1,
  }
}));
