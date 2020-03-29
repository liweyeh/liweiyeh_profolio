import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// UI
import Text from '../common/Text';

//  Assets
import gmail from '../../assets/gmail.svg';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    backgroundColor: 'white',
    boxShadow: 'inset 0px 6px 30px black'
  },
  title: {
    marginTop: theme.spacing(5)
  },
  img: {
    width: '15vw',
    minWidth: '150px'
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.gridContainer}
        container
        justify='center'
        alignItems='center'
        spacing={1}
      >
        <Grid item xs={10} sm={10} className={classes.title}>
          <Text
            color='textPrimary'
            variant='h4'
            msgID='contact.title'
            defaultMsg='Contact Me'
          />
        </Grid>
        <Grid
          container
          item
          xs={10}
          sm={10}
          justify='center'
          alignItems='center'
        >
          <img src={gmail} alt='email_icon' className={classes.img} />
        </Grid>
        <Grid item xs={10} sm={10}>
          <Text
            color='textPrimary'
            variant='h6'
            msgID='contact.email'
            defaultMsg='Contact Me'
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
