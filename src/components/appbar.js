import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,},
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="#dcdde1" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            QUOTE MACHINE 
          </Typography>
          <Button href="https://github.com/akshays-repo/Random-quote-generator" color="inherit">Github</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
