import React from "react";
import { Container, Grid, Typography } from '@material-ui/core'
import { Users } from "./Users/Users"
import { makeStyles } from '@material-ui/core/styles';
import UserCards from "./Users/UserCards"

const useStyles = makeStyles({
    meetTeam: {
        padding: "1em",
        color: "#43B5D9"
    }
});

const MeetTeam = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="md">

                <Typography variant="h2" align="center" className={classes.meetTeam} >We are Omou</Typography>

                <Grid
                    container
                    spacing={4}
                    direction="row"
                    alignItems="flex-start">
                    {Users
                        .filter((user) => user)
                        .map((user) => <UserCards user={user} />)}

                </Grid>
            </Container>

        </>
    )
}

export default MeetTeam


