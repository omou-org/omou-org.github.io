import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        height: 300,
    },
    media: {
        height: 140,
    },
});

const UserCards = ({ user }) => {
    const classes = useStyles();
    return (

        <Grid item sm={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image=""
                        title=""
                    />
                    {console.log(user.picture_src)}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {user.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            LinkedIn
          </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {user.role}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {user.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </Grid>

    );
}

export default UserCards