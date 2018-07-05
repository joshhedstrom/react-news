import React, { Component } from 'react';
import './Main.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
          <form>
            <Grid item xs={12}>
              <TextField
                id="full-width"
                label="Topic Search"
                InputLabelProps={{
                  shrink: true
                }}
                placeholder="Search for an article"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="date"
                label="Start Date"
                type="date"
                defaultValue="2000-01-01"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="date"
                label="End Date"
                type="date"
                defaultValue="2018-01-01"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
