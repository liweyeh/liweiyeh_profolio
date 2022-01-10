// Dependecies
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// UI
import Text from "../common/Text";
import PortfolioItems from "./PortfolioItems";

// Assests
import waterInsight from "../../assets/water_insight.png";
import uqjx from "../../assets/uqjx.png";
import vr from "../../assets/vr.gif";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
    },
    items: {
        marginTop: theme.spacing(5),
    },
}));

// Portforlios items
const WIMsg = {
    title: "projects.WITitle",
    status: "projects.statusBuild",
    teamSize: "projects.WITeamSize",
    workType: "projects.workTypeCommercial",
    content: {
        description: "projects.WIDes",
        tech: "projects.WITech",
        role: "projects.WIRole",
    },
    demo: "projects.demoAvailable",
    demolink: "https://waterinsights.waternsw.com.au/",
    img: waterInsight,
};

const uqjxMsg = {
    title: "projects.uqjxTitle",
    status: "projects.statusPaused",
    teamSize: "projects.uqjxTeamSize",
    workType: "projects.workTypeVolunteer",
    content: {
        description: "projects.uqjxDes",
        tech: "projects.uqjxTech",
        role: "projects.uqjxRole",
    },
    demo: "projects.demoNotAvailable",
    img: uqjx,
};

const vrMsg = {
    title: "projects.vrTitle",
    status: "projects.statusFinished",
    teamSize: "projects.vrTeamSize",
    workType: "projects.workTypeSchool",
    content: {
        description: "projects.vrDes",
        tech: "projects.vrTech",
        role: "projects.vrRole",
    },
    demo: "projects.demoNotAvailable",
    img: vr,
};

const projects = [WIMsg, uqjxMsg, vrMsg];

const Portfolio = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={10} sm={10} className={classes.title}>
                    <Text
                        color="secondary"
                        variant="h4"
                        msgID="projects.title"
                        defaultMsg="Past Projects"
                    />
                </Grid>
                <Grid container justify="center" item xs={10} sm={10} className={classes.items}>
                    {projects.map((project) => (
                        <PortfolioItems key={project.title} config={project} />
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default Portfolio;
