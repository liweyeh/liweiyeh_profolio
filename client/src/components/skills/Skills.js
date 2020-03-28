// Dependencies
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Fade, Popover } from '@material-ui/core';

// UI
import Text from '../common/Text';

// Assests
import pythonIcon from '../../assets/python.svg';
import htmlIcon from '../../assets/html.svg';
import cssIcon from '../../assets/css.svg';
import javascriptIcon from '../../assets/javascript.svg';
import reactIcon from '../../assets/react.svg';
import materialIcon from '../../assets/material-ui.svg';
import gitIcon from '../../assets/git.svg';
import githubIcon from '../../assets/github.svg';
import azureIcon from '../../assets/azure.svg';
import javaIcon from '../../assets/java.svg';
import unityIcon from '../../assets/unity.svg';
import csharpIcon from '../../assets/c-sharp.svg';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    backgroundColor: 'white',
    boxShadow: 'inset 0px 6px 30px black'
  },
  title: {
    marginTop: theme.spacing(5)
  },
  icons: {
    textAlign: 'center'
  },
  icon: {
    margin: theme.spacing(1.1)
  },
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    width: '15vw',
    minWidth: '300px'
  },
  smallicon: {
    width: '20%',
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing()
  }
}));

const Skills = () => {
  // Local constants
  const classes = useStyles();
  const mainIcons = [
    {
      icon: htmlIcon,
      alt: 'HTML5',
      msgID: 'skills.html',
      contentMsgUsage: 'skills.htmlUsage',
      contentMsgExp: 'skills.htmlExp',
      contentMsgCommercial: 'skills.htmlCommercial'
    },
    {
      icon: cssIcon,
      alt: 'CSS3',
      msgID: 'skills.css',
      contentMsgUsage: 'skills.cssUsage',
      contentMsgExp: 'skills.cssExp',
      contentMsgCommercial: 'skills.cssCommercial'
    },
    {
      icon: javascriptIcon,
      alt: 'JS',
      msgID: 'skills.js',
      contentMsgUsage: 'skills.jsUsage',
      contentMsgExp: 'skills.jsExp',
      contentMsgCommercial: 'skills.jsCommercial'
    },
    {
      icon: reactIcon,
      alt: 'React',
      msgID: 'skills.react',
      contentMsgUsage: 'skills.reactUsage',
      contentMsgExp: 'skills.reactExp',
      contentMsgCommercial: 'skills.reactCommercial'
    },
    {
      icon: materialIcon,
      alt: 'Material-UI',
      msgID: 'skills.material',
      contentMsgUsage: 'skills.materialUsage',
      contentMsgExp: 'skills.materialExp',
      contentMsgCommercial: 'skills.materialCommercial'
    },
    {
      icon: gitIcon,
      alt: 'Git',
      msgID: 'skills.git',
      contentMsgUsage: 'skills.gitUsage',
      contentMsgExp: 'skills.gitExp',
      contentMsgCommercial: 'skills.gitCommercial'
    },
    {
      icon: githubIcon,
      alt: 'Github',
      msgID: 'skills.github',
      contentMsgUsage: 'skills.githubUsage',
      contentMsgExp: 'skills.githubExp',
      contentMsgCommercial: 'skills.githubCommercial'
    }
  ];
  const secondIcons = [
    {
      icon: pythonIcon,
      alt: 'Python',
      msgID: 'skills.python',
      contentMsgUsage: 'skills.pythonUsage',
      contentMsgExp: 'skills.pythonExp',
      contentMsgCommercial: 'skills.pythonCommercial'
    },
    {
      icon: javaIcon,
      alt: 'Java',
      msgID: 'skills.java',
      contentMsgUsage: 'skills.javaUsage',
      contentMsgExp: 'skills.javaExp',
      contentMsgCommercial: 'skills.javaCommercial'
    },
    {
      icon: azureIcon,
      alt: 'Azure DevOps',
      msgID: 'skills.azure',
      contentMsgUsage: 'skills.azureUsage',
      contentMsgExp: 'skills.azureExp',
      contentMsgCommercial: 'skills.azureCommercial'
    },
    {
      icon: unityIcon,
      alt: 'Unity',
      msgID: 'skills.unity',
      contentMsgUsage: 'skills.unityUsage',
      contentMsgExp: 'skills.unityExp',
      contentMsgCommercial: 'skills.unityCommercial'
    },
    {
      icon: csharpIcon,
      alt: 'C#',
      msgID: 'skills.csharp',
      contentMsgUsage: 'skills.csharpUsage',
      contentMsgExp: 'skills.csharpExp',
      contentMsgCommercial: 'skills.csharpCommercial'
    }
  ];
  const contentRef = useRef();
  const transitionTime = 400;

  // State
  const [pos, setPos] = useState();
  const [anchor, setAnchor] = useState(null);
  const [curIcon, setCurIcon] = useState(null);

  // Life Cycle
  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(contentRef));
  }, [contentRef, pos]);

  const handleScroll = ref => {
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

  const handlePopoverOpen = (event, icon) => {
    setCurIcon(icon);
    setAnchor(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchor(null);
  };

  const open = Boolean(anchor);

  return (
    <div ref={contentRef}>
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
            msgID='skills.skills'
            defaultMsg='Main Languages and Tools'
          />
        </Grid>
        <Grid item sm={10} className={classes.icons}>
          {mainIcons.map((icon, key) => {
            return (
              <div key={icon.alt} style={{ display: 'inline' }}>
                <Fade
                  in={isInView(2.5, contentRef.current)}
                  timeout={{ enter: key * transitionTime, exit: 0 }}
                >
                  <img
                    src={icon.icon}
                    alt={icon.alt}
                    className={classes.icon}
                    onMouseEnter={e => handlePopoverOpen(e, icon)}
                    onMouseLeave={handlePopoverClose}
                  />
                </Fade>
                <Popover
                  className={classes.popover}
                  classes={{
                    paper: classes.paper
                  }}
                  open={open}
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  disableScrollLock
                  disablePortal
                >
                  <Grid container>
                    <Grid item container direction='row' alignItems='center'>
                      <img
                        src={curIcon && curIcon.icon}
                        alt={curIcon && curIcon.alt}
                        className={classes.smallicon}
                      />
                      <Text
                        color='secondary'
                        variant='h5'
                        msgID={curIcon && curIcon.msgID}
                        defaultMsg=''
                      />
                    </Grid>
                    <Grid item>
                      <Text
                        color='secondary'
                        variant='h6'
                        msgID={curIcon && curIcon.contentMsgUsage}
                        defaultMsg='Usage: Frontend Development'
                      />
                    </Grid>
                    <Grid item>
                      <Text
                        color='secondary'
                        variant='h6'
                        msgID={curIcon && curIcon.contentMsgExp}
                        defaultMsg='Experience: 2 years'
                      />
                    </Grid>
                    <Grid item>
                      <Text
                        color='secondary'
                        variant='h6'
                        msgID={curIcon && curIcon.contentMsgCommercial}
                        defaultMsg='Commercial Experience: 1 year'
                      />
                    </Grid>
                  </Grid>
                </Popover>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={10} sm={10}>
          <Text
            color='textPrimary'
            variant='h4'
            msgID='skills.secondarySkills'
            defaultMsg='Other Languages and Tools '
          />
        </Grid>
        <Grid item sm={10} className={classes.icons}>
          {secondIcons.map((icon, key) => {
            return (
              <div style={{ display: 'inline' }} key={icon.alt}>
                <Fade
                  in={isInView(1.1, contentRef.current)}
                  timeout={{ enter: key * transitionTime, exit: 0 }}
                >
                  <img
                    src={icon.icon}
                    alt={icon.alt}
                    className={classes.icon}
                    onMouseEnter={e => handlePopoverOpen(e, icon)}
                    onMouseLeave={handlePopoverClose}
                  />
                </Fade>
                <Popover
                  className={classes.popover}
                  classes={{
                    paper: classes.paper
                  }}
                  open={open}
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  disableScrollLock
                  disablePortal
                >
                  <Grid container>
                    <Grid item container direction='row' alignItems='center'>
                      <img
                        src={curIcon && curIcon.icon}
                        alt={curIcon && curIcon.alt}
                        className={classes.smallicon}
                      />
                      <Text
                        color='secondary'
                        variant='h5'
                        msgID={curIcon && curIcon.msgID}
                        defaultMsg=''
                      />
                    </Grid>
                    <Grid item>
                      <Text
                        color='secondary'
                        variant='h6'
                        msgID={curIcon && curIcon.contentMsgUsage}
                        defaultMsg='Usage: Frontend Development'
                      />
                    </Grid>
                    <Grid item>
                      <Text
                        color='secondary'
                        variant='h6'
                        msgID={curIcon && curIcon.contentMsgExp}
                        defaultMsg='Experience: 2 years'
                      />
                    </Grid>
                    <Grid item>
                      <Text
                        color='secondary'
                        variant='h6'
                        msgID={curIcon && curIcon.contentMsgCommercial}
                        defaultMsg=''
                      />
                    </Grid>
                  </Grid>
                </Popover>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
