import useStyles from "@/utils/styles";
import Layout from "@/components/Layout";
import { Box, Typography } from "@material-ui/core";
import Image from "next/image";

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Layout>
        <Typography sx={{ marginTop: 30 }}>About</Typography>
        <Typography>
          This works great when the changes can be isolated to a new DOM
          element. For instance, you can change the margin this way. However,
          sometimes you have to target the underlying DOM element. As an
          example, you may want to change the border of the Button. The Button
          component defines its own styles. CSS inheritance doesn't help. To
          workaround the problem, you can use the sx prop directly on the child
          if it is a MUI component.
        </Typography>
      </Layout>
    </Box>
  );
};

export default About;
