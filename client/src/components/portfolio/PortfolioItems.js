// Dependecies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Fade } from '@material-ui/core';

// UI
import Text from '../common/Text';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  item: {
    height: '25vh'
  }
}));

const PortfolioItems = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify='center'>
        <Grid item xs={10} sm={10}>
          <Paper className={classes.item}>
            <Text
              color='textPrimary'
              variant='h4'
              msgID='portolios.title'
              defaultMsg='Past Projects'
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PortfolioItems;
