// Dependecies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Fade } from '@material-ui/core';

// UI
import Text from '../common/Text';
import PortfolioItems from './PortfolioItems';

const useStyles = makeStyles(theme => ({
  root: {
    height: '50vh',
    marginTop: theme.spacing(5)
  },
  items: {
    marginTop: theme.spacing(5)
  }
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={10} sm={10} className={classes.title}>
          <Text
            color='secondary'
            variant='h4'
            msgID='portolios.title'
            defaultMsg='Past Projects'
          />
        </Grid>
        <Grid
          container
          justify='center'
          item
          xs={10}
          sm={10}
          className={classes.items}
        >
          <PortfolioItems />
          <PortfolioItems />
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
