import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navContainer: {
    marginBottom: "80px",
  },
  navBar: {
    background: "black",
  },
  logoTitle: {
    color: "goldenrod",
    fontSize: 20,
    fontFamily: "Roboto",
    flexGrow: 1,
  },
  logoIcon: {
    marginRight: 5,
    fontSize: 40,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginRight: "5px",
  },
  footer: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  footerContent: {
    color: "white",
    textAlign: "center",
  },
});

export default useStyles;
