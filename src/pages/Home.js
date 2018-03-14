// modules/Home.js
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import ButtonAppBar from '../components/titlebar';
import Barcoder from '../components/barcode';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
});

function Home(props) {
  const { classes } = props;

  return (
    <div>
      <ButtonAppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <div className={classes.uploader}>
          <Barcoder />
        </div>
      </main>
    </div>
  );
}

export default withStyles(styles)(Home);
