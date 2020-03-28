// Dependecies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// UI
import Text from '../common/Text';
import PortfolioItems from './PortfolioItems';

// Assests
import floodRisk from '../../assets/floodrisk.png';
import uqjx from '../../assets/uqjx.png';
import vr from '../../assets/vr.gif';

const useStyles = makeStyles(theme => ({
  root: {
    height: '50vh',
    marginTop: theme.spacing(5)
  },
  items: {
    marginTop: theme.spacing(5)
  }
}));

// Portforlios items
const floodRiskMsg = {
  title: 'projects.floodriskTitle',
  status: 'projects.statusBuild',
  teamSize: 'projects.floodRiskTeamSize',
  workType: 'projects.workTypeCommercial',
  content: 'projects.floodriskContent',
  demo: 'projects.demoAvalible',
  demolink: 'https://floodriskweb.z16.web.core.windows.net/',
  img: floodRisk
};

const uqjxMsg = {
  title: 'projects.uqjxTitle',
  status: 'projects.statusBuild',
  teamSize: 'projects.uqjxTeamSize',
  workType: 'projects.workTypeVolunteer',
  content: 'projects.uqjxContent',
  demo: 'projects.demoAvalible',
  demolink: 'https://fathomless-depths-86613.herokuapp.com/',
  img: uqjx
};

const vrMsg = {
  title: 'projects.vrTitle',
  status: 'projects.statusFinished',
  teamSize: 'projects.vrTeamSize',
  workType: 'projects.workTypeSchool',
  content: 'projects.vrContent',
  demo: 'projects.demoNotAvalible',
  img: vr
};

const projects = [floodRiskMsg, uqjxMsg, vrMsg];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={10} sm={10} className={classes.title}>
          <Text
            color='secondary'
            variant='h4'
            msgID='projects.title'
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
          {projects.map(project => (
            <PortfolioItems key={project.title} config={project} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
