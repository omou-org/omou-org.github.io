import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        height: 500,
    },
    media: {
        height: 300,
    },
});

const UserCards = ({ user }) => {
    const classes = useStyles();
    return (

        <Grid item sm={4}>
            <Card
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
                            gutterBottom
                            variant="h5"
                            component="h2"
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


            </Card>
        </Grid>

    );
}

export default UserCards