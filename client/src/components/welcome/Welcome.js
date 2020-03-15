//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

//Assets
import mugshot from '../../assets/mugshot.jpeg';
import taiwan from '../../assets/taiwan.svg';

//UI
import Text from '../common/Text';
import Typer from '../common/Typer';

const useStyles = makeStyles(theme => ({
  'root': {
    height: '100vh'
  },
  'mugshot': {
    width: '22vw',
    minWidth: '250px',
    borderRadius: '400px',
    marginBottom: theme.spacing(2),
    boxShadow: '5px 5px 20px'
  },
  'animation': {
    animationName: '$fadeIn',
    animationDuration: '1s'
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  'image': {
    width: '3vw',
    minWidth: '50px',
    marginLeft: '1rem'
  }
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        className={classes.root}
        justify='space-around'
        alignItems='center'
      >
        <Grid
          xs={10}
          sm={6}
          item
          container
          direction='column'
          alignItems='center'
          className={classes.animation}
        >
          <img src={mugshot} alt='author_face' className={classes.mugshot} />
          <Grid container direction='row' justify='center' alignItems='center'>
            <Text
              color='secondary'
              variant='h5'
              msgID='welcome.name'
              defaultMsg='Liwei Yeh'
            />
            <img src={taiwan} className={classes.image} alt='taiwan_flag' />
          </Grid>
          <Text
            color='secondary'
            variant='body1'
            msgID='welcome.school'
            defaultMsg='Class of 2019, University of Queensland, Master of IT'
          />
          <Text
            color='secondary'
            variant='body1'
            msgID='welcome.occupation'
            defaultMsg='Frontend developer, React Developer'
          />
        </Grid>
        <Grid xs={10} sm={6} item container>
          <Typer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
