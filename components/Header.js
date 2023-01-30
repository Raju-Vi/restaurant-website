import useStyles from "../utils/styles";
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core";
import Head from "next/head";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Link from "next/link";

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.navContainer}>
        <AppBar className={classes.navBar}>
          <Toolbar>
            <Typography className={classes.logoTitle}>
              <FastfoodIcon className={classes.logoIcon} />
              My Restaurant
            </Typography>
            <Box>
              <Box className={classes.links}>
                <Typography className={classes.link}>
                  <Link href={"/"}>Home</Link>
                </Typography>
                <Typography className={classes.link}>
                  <Link href={"/about"}>About</Link>
                </Typography>
                <Typography className={classes.link}>
                  <Link href={"/contact"}>Contact</Link>
                </Typography>
                <Typography className={classes.link}>
                  <Link href={"/manu"}>Manu</Link>
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
