import React from "react";
import ParticlesBg from "particles-bg";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "relative",
    zIndex: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Hero: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <ParticlesBg type="circle" bg={true} />
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Hassle-free grocery lists for families, friends and everything between
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Groceria lets you create shareable grocery lists with a single click
          of a button. It supports real-time editing and is easily usable from
          any platform.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Create new grocery list
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Read more (not working)
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Hero;
