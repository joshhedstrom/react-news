import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    align: 'center'
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
            id="topic"
            label="Topic Search"
            InputLabelProps={{
              shrink: true
            }}
            placeholder="Search for an article"
            fullWidth
            margin="normal"
            onChange={props.topicAction}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="startDate"
            label="Start Date (optional)"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            onChange={props.startAction}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="endDate"
            label="End Date (optional)"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            onChange={props.endAction}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={props.submitAction}
          >
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
