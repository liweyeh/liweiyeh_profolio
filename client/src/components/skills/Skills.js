// Dependencies
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

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
    backgroundColor: 'white'
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
  return (
    <Fragment>
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
          {mainIcons.map(icon => {
            return (
              <img src={icon.icon} alt={icon.alt} className={classes.icon} />
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
          {secondIcons.map(icon => {
            return (
              <img src={icon.icon} alt={icon.alt} className={classes.icon} />
            );
          })}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Skills;
