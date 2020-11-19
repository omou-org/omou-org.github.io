import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ZoomContainer from './ZoomContainer';

const useStyles = makeStyles({
    meetOmouHeader: {
        padding: '7em',
    },
    meetOmouText: {
        fontSize: '72px',
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
                    MEET <span>OMOU</span>
                </Typography>
            </Grid>

            <Container maxWidth="xl" style={{ paddingBottom: '4em' }}>
                <ZoomContainer />
            </Container>
        </Grid>
    );
};

export default MeetOmouContainer;
