// Dependecies
import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Chip, Button, Grow } from '@material-ui/core';
import {
  Build,
  People,
  Work,
  DoneAll,
  Accessibility,
  Pageview,
  NotInterested,
} from '@material-ui/icons';

// UI
import Text from '../common/Text';

// Assests

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(5),
  },
  items: {
    width: '60vw',
    maxWidth: '700px',
    minWidth: '330px',
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    padding: theme.spacing(2),
  },
  imageContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2),
  },
  image: {
    width: '100%',
    boxShadow: '0px 3px 10px',
  },
  item: {
    marginBottom: theme.spacing(2),
  },
  chip: {
    padding: theme.spacing(2),
  },
  buttonBase: {
    width: '10vw',
    minWidth: '200px',
  },
}));

const PortfolioItems = ({ config }) => {
  const classes = useStyles();
  const contentRef = useRef();
  const [pos, setPos] = useState();

  // Life Cycle
  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(contentRef));
  }, [contentRef, pos]);

  const handleScroll = (ref) => {
    if (ref.current) setPos(ref.current.getBoundingClientRect().top);
  };

  const isInView = (offset, ref) => {
    if (ref) {
      const top = ref.getBoundingClientRect().top;
      const viewport =
        window.innerHeight - ref.getBoundingClientRect().height / offset;
      if (top <= viewport) {
        return true;
      }
    }

    return false;
  };

  const {
    title,
    status,
    teamSize,
    workType,
    content,
    demo,
    demolink,
    img,
  } = config;

  return (
    <Grow
      in={isInView(3, contentRef.current)}
      timeout={{ enter: 1000, exit: 0 }}
    >
      <div className={classes.root} ref={contentRef}>
        <Grid container justify='center'>
          <Paper elevation={10} className={classes.items}>
            <Grid container direction='column' alignItems='flex-start'>
              <Grid item className={classes.imageContainer}>
                <img src={img} alt='floodrisk' className={classes.image} />
              </Grid>
              <Grid item className={classes.item}>
                <Text
                  color='secondary'
                  variant='h4'
                  msgID={title}
                  defaultMsg='Project Title '
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
                    className={classes.chip}
                    icon={
                      status === 'projects.statusBuild' ? (
                        <Build />
                      ) : (
                        <DoneAll />
                      )
                    }
                    size='small'
                    color='secondary'
                    label={
                      <Text
                        color='textPrimary'
                        variant='body2'
                        msgID={status}
                        defaultMsg='In Development'
                      />
                    }
                  />
                </Grid>
                <Grid item>
                  <Chip
                    className={classes.chip}
                    icon={<People />}
                    size='small'
                    color='secondary'
                    label={
                      <Text
                        color='textPrimary'
                        variant='body1'
                        msgID={teamSize}
                        defaultMsg='Team size of 4'
                      />
                    }
                  />
                </Grid>
                <Grid item>
                  <Chip
                    className={classes.chip}
                    icon={
                      workType === 'projects.workTypeCommercial' ? (
                        <Work />
                      ) : (
                        <Accessibility />
                      )
                    }
                    color='secondary'
                    size='small'
                    label={
                      <Text
                        color='textPrimary'
                        variant='body1'
                        msgID={workType}
                        defaultMsg='commercial'
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Text
                  color='secondary'
                  variant='h6'
                  msgID={'projects.description'}
                  defaultMsg='Project description:'
                  emphasis
                />
              </Grid>
              <Grid item className={classes.item}>
                <Text
                  color='secondary'
                  variant='body1'
                  msgID={content.description}
                  defaultMsg='Project description '
                  textAlign='left'
                />
              </Grid>
              {content.login && (
                <React.Fragment>
                  <Grid item>
                    <Text
                      color='secondary'
                      variant='body1'
                      msgID={'projects.accounts'}
                      defaultMsg='Login:  '
                      textAlign='left'
                      emphasis
                    />
                  </Grid>
                  <Grid item className={classes.item}>
                    <div style={{ display: 'flex' }}>
                      <Text
                        color='secondary'
                        variant='body1'
                        msgID={content.login}
                        defaultMsg='Login:  '
                      />
                      <Text
                        color='secondary'
                        variant='body1'
                        msgID={'null'}
                        defaultMsg={content.loginDetails.user}
                      />
                    </div>
                  </Grid>

                  <Grid item className={classes.item}>
                    <div style={{ display: 'flex' }}>
                      <Text
                        color='secondary'
                        variant='body1'
                        msgID={content.password}
                        defaultMsg='Password: '
                      />
                      <Text
                        color='secondary'
                        variant='body1'
                        msgID={'null'}
                        defaultMsg={content.loginDetails.password}
                      />
                    </div>
                  </Grid>
                </React.Fragment>
              )}

              <Grid item>
                <Text
                  color='secondary'
                  variant='h6'
                  msgID={'projects.tech'}
                  defaultMsg='Tech Stacks'
                  emphasis
                />
              </Grid>
              <Grid item className={classes.item}>
                <Text
                  color='secondary'
                  variant='body1'
                  msgID={content.tech}
                  defaultMsg='Project description '
                  textAlign='left'
                />
              </Grid>
              <Grid item>
                <Text
                  color='secondary'
                  variant='h6'
                  msgID={'projects.role'}
                  defaultMsg='My Role:'
                  emphasis
                />
              </Grid>
              <Grid item className={classes.item}>
                <Text
                  color='secondary'
                  variant='body1'
                  msgID={content.role}
                  defaultMsg='Project description'
                  textAlign='left'
                />
              </Grid>
              <Grid
                container
                item
                className={classes.item}
                direction='row'
                alignItems='center'
                justify='center'
              >
                <Button
                  className={classes.buttonBase}
                  color='primary'
                  variant='contained'
                  elevation={10}
                  target='_blank'
                  href={demolink}
                  disabled={demo === 'projects.demoAvailable' ? false : true}
                  startIcon={
                    demo === 'projects.demoAvailable' ? (
                      <Pageview />
                    ) : (
                      <NotInterested />
                    )
                  }
                >
                  <Text
                    color='secondary'
                    variant='body1'
                    msgID={demo}
                    defaultMsg='Demo'
                  />
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </Grow>
  );
};

export default PortfolioItems;
