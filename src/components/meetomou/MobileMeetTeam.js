import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Paper,
    CardActionArea,
    CardMedia,
    CardContent,
} from '@material-ui/core';
import { userData } from './userData.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        height: 500,
    },
    media: {
        height: 300,
        width: 'auto',
        borderRadius: '70%',
    },

    cardTitle: {
        fontSize: '2em',
    },
    meetTeam: {
        padding: '1em',
        color: '#43B5D9',
    },
});

const MobileMeetTeam = () => {
    const classes = useStyles();

    const UserCards = ({ user }) => {
        return (
            <Grid item sm={4}>
                <Paper elevation={0}>
                    <CardActionArea
                        className={classes.root}
                        disableTouchRipple={true}
                        onClick={() => {
                            user.linkedin && window.open(user.linkedin);
                        }}
                    >
                        <CardMedia
                            className={classes.media}
                            image={require(`./images/${user.image}`)}
                            title={user.name}
                        />
                        <CardContent>
                            <Typography
                                className={classes.cardTitle}
                                align="left"
                            >
                                {user.name}
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h2"
                                align="left"
                            >
                                {user.role}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                align="left"
                            >
                                {user.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Paper>
            </Grid>
        );
    };

    return (
        <>
            <Container maxWidth="md">
                <Grid
                    container
                    spacing={4}
                    direction="row"
                    alignItems="flex-start"
                >
                    {userData
                        .filter((user) => user)
                        .map((user) => (
                            <UserCards user={user} />
                        ))}
                </Grid>
            </Container>
        </>
    );
};

export default MobileMeetTeam;
