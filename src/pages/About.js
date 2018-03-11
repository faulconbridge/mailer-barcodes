// modules/About.js
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import ButtonAppBar from '../components/titlebar';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

function About(props) {
  const { classes } = props;

  return (
    <div>
      <ButtonAppBar />
      <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography noWrap>
        {'This is the About page!'}
      </Typography>
    </main>

    </div>
  );
}

export default withStyles(styles)(About);
