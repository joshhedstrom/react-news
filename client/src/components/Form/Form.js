import React from 'react';
import TextField from '@material-ui/core/TextField';


const Form = props => (
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
);

export default Form;
