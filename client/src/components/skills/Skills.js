// Dependencies
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Fade } from '@material-ui/core';

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
    boxShadow: 'inset 0px 6px 6px black'
  },
  title: {
    marginTop: theme.spacing(5)
  },
  icons: {
    textAlign: 'center'
  },
  icon: {
    margin: theme.spacing(2)
  }
}));

const Skills = () => {
  // Local constants
  const classes = useStyles();
  const mainIcons = [
    { icon: htmlIcon, alt: 'HTML5' },
    { icon: cssIcon, alt: 'CSS3' },
    { icon: javascriptIcon, alt: 'JS' },
    { icon: reactIcon, alt: 'React' },
    { icon: materialIcon, alt: 'Material-UI' },
    { icon: gitIcon, alt: 'Git' },
    { icon: githubIcon, alt: 'Github' }
  ];
  const secondIcons = [
    { icon: pythonIcon, alt: 'Python' },
    { icon: javaIcon, alt: 'Java' },
    { icon: azureIcon, alt: 'Azure DevOps' },
    { icon: unityIcon, alt: 'Unity' },
    { icon: csharpIcon, alt: 'C#' }
  ];
  const contentRef = useRef();
  const transitionTime = 400;

  // State
  const [pos, setPos] = useState();

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
            defaultMsg='Main Languages and Tools '
          />
        </Grid>
        <Grid item sm={10} className={classes.icons}>
          {mainIcons.map((icon, key) => {
            return (
              <Fade
                in={isInView(2.5, contentRef.current)}
                timeout={{ enter: key * transitionTime, exit: 0 }}
              >
                <img src={icon.icon} alt={icon.alt} className={classes.icon} />
              </Fade>
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
              <Fade
                in={isInView(1.1, contentRef.current)}
                timeout={{ enter: key * transitionTime, exit: 0 }}
              >
                <img src={icon.icon} alt={icon.alt} className={classes.icon} />
              </Fade>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
