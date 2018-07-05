import React, { Component } from 'react';
import './Main.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundColor: 'blue',
  }
});

class Main extends Component {
  state = {};

  componentDidMount() {}

  loadArticles = () => {};

  render() {
    return (
      <div className={root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  New York Times Article Search
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
