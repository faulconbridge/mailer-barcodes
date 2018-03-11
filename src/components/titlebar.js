import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import HelpIcon from 'material-ui-icons/Help';
import StyledLink from './styledLink';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  homeButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.homeButton}
            color="inherit"
            aria-label="Home">
            <StyledLink
              to="/">
              <HomeIcon />
            </StyledLink>
          </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}>
              Generate Mailer Barcodes
            </Typography>
          <StyledLink
            to="/about">
            <IconButton color="inherit" aria-label="About">
              <HelpIcon />
            </IconButton>
          </StyledLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
