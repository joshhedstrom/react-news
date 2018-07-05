import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  }
});

function Form(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
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
        <Grid item xs={12} sm={6}>
          <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue="2000-01-01"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="date"
            label="End Date"
            type="date"
            defaultValue="2018-01-01"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button size="large" variant='outlined' color='primary' className={classes.button}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
