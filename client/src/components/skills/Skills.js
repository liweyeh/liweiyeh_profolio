// Dependencies
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

// UI
import Text from '../common/Text';

const useStyles = makeStyles(theme => ({
  root: {
    height: '25vh',
    backgroundColor: 'white'
  }
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid className={classes.root} justify='center'>
        <Paper elevation={3}>
          <Text
            color='textPrimary'
            variant='h3'
            msgID='skills.skills'
            defaultMsg='Programming Skills'
          />
        </Paper>
      </Grid>
    </Fragment>
  );
};

export default Skills;
