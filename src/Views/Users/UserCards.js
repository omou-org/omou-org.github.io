import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import { Paper, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core'


import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        height: 500
    },
    media: {
        height: 300,
        paddingTop: '',
        borderRadius: '50%',

    },

    cardTitle: {
        fontSize: "2em"
    }
});

const UserCards = ({ user }) => {
    const classes = useStyles();
    return (

        <Grid item sm={4}>
            <Paper
                elevation={0}
            >
                <CardActionArea
                    className={classes.root}
                    disableTouchRipple={true}
                    onClick={() => {
                        window.open(user.linkedin)
                    }}>
                    <CardMedia
                        className={classes.media}
                        image={require(`./pictures/${user.picture_src}`)}
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
}

export default UserCards