// Dependecies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Chip, Link } from '@material-ui/core';
import { Build, People, Work } from '@material-ui/icons';

// UI
import Text from '../common/Text';

// Assests
import floodRisk from '../../assets/floodrisk.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(5)
  },
  items: {
    width: '40vw',
    minWidth: '400px',
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    padding: theme.spacing(5)
  },
  imageContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2)
  },
  image: {
    width: '100%'
  },
  item: {
    marginBottom: theme.spacing(2)
  },
  chip: {
    margin: theme.spacing(1.1)
  }
}));

const PortfolioItems = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify='center'>
        <Paper elevation={10} className={classes.items}>
          <Grid container direction='column' alignItems='flex-start'>
            <Grid item className={classes.imageContainer}>
              <img src={floodRisk} alt='floodrisk' className={classes.image} />
            </Grid>
            <Grid item className={classes.item}>
              <Text
                color='secondary'
                variant='h4'
                msgID='projects.floodriskTitle'
                defaultMsg='Other Languages and Tools '
              />
            </Grid>
            <Grid
              container
              item
              className={classes.item}
              direction='row'
              alignItems='center'
              spacing={1}
            >
              <Grid item>
                <Chip
                  icon={<Build />}
                  size='small'
                  color='secondary'
                  label={
                    <Text
                      color='textPrimary'
                      variant='body2'
                      msgID='projects.statusBuild'
                      defaultMsg='In Development'
                    />
                  }
                />
              </Grid>
              <Grid item>
                <Chip
                  icon={<People />}
                  size='small'
                  color='secondary'
                  label={
                    <Text
                      color='textPrimary'
                      variant='body1'
                      msgID='projects.teamSize'
                      defaultMsg='In Development'
                    />
                  }
                />
              </Grid>
              <Grid item>
                <Chip
                  icon={<Work />}
                  color='secondary'
                  size='small'
                  label={
                    <Text
                      color='textPrimary'
                      variant='body1'
                      msgID='projects.workType'
                      defaultMsg='In Development'
                    />
                  }
                />
              </Grid>
            </Grid>
            <Grid item className={classes.item}>
              <Text
                color='secondary'
                variant='body1'
                msgID='projects.floodriskContent'
                defaultMsg='Project description '
              />
            </Grid>
            <Grid
              container
              item
              className={classes.item}
              direction='row'
              alignItems='center'
            >
              <Text
                color='secondary'
                variant='body1'
                msgID='projects.floodriskDemo'
                defaultMsg='Demo'
              />
              <a
                style={{
                  marginLeft: '8px',
                  textDecoration: 'none'
                }}
                href='https://floodriskweb2.z16.web.core.windows.net/'
              >
                <Text
                  color='secondary'
                  variant='body1'
                  msgID='projects.floodriskDemoLink'
                  defaultMsg='Demo Link'
                />
              </a>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default PortfolioItems;
