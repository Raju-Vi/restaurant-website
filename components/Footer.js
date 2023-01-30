import useStyles from "@/utils/styles";
import { Box, Typography } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Box>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <YouTubeIcon />
      </Box>
      <Typography className={classes.footerContent}>
        All Rights Reserved &copy; My Restaurant
      </Typography>
    </Box>
  );
};

export default Footer;
