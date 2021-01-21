import React from 'react';
import { Grid, Typography, Container, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ZoomContainer from './ZoomContainer';
import MobileMeetTeam from './MobileMeetTeam';

const useStyles = makeStyles({
    meetOmouHeader: {
        padding: '7em',
    },
    meetOmouText: {
        fontSize: '92px',
        fontWeight: 400,
    },
});

const MeetOmouContainer = () => {
    const classes = useStyles();

    return (
        <Grid>
            <Grid
                item
                container
                justify="center"
                alignContent="center"
                className={classes.meetOmouHeader}
            >
                <Typography className={classes.meetOmouText}>
                    MEET <span style={{ color: 'rgb(31,130,161)' }}>OMOU</span>
                </Typography>
            </Grid>
            <Hidden mdDown>
                <Container maxWidth="xl" style={{ paddingBottom: '4em' }}>
                    <ZoomContainer />
                </Container>
            </Hidden>
            <Hidden mdUp>
                <div>
                    <MobileMeetTeam />
                </div>
            </Hidden>
        </Grid>
    );
};

export default MeetOmouContainer;
