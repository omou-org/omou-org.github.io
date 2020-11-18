import React, { useState } from 'react';
import {
    Grid,
    Typography,
    Box,
    TextField,
    Paper,
    Zoom,
    Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import userData from './userInfo.json';

const useStyles = makeStyles({
    meetOmouHeader: {
        padding: '7em',
    },
    meetOmouText: {
        fontSize: '72px',
    },
    omouTeamText: {
        fontSize: '30px',
        color: 'white',
        fontWeight: '700',
    },
    zoomChat: {
        height: '1200px',
        width: '469px',
        overflowY: 'scroll',
        color: 'white',
    },
    imageHighlightSelect: {
        outline: 'solid 6px #24FF00',
        outlineOffset: '-6px',
    },
    imageNormal: {
        border: ' solid 2px none',
    },
    zoomChatStyles: {
        paddingTop: '1em',
    },
});

const ZoomContainer = () => {
    const classes = useStyles();
    const [choosenImage, setChoosenImage] = useState(null);
    const [zoomChat, setZoomChat] = useState([]);

    const takeFirstName = (string) => {
        return string.match(/(?:^|(?:[.!?]\s))(\w+)/gm);
    };

    const ZoomImageBox = ({ image, name, id }) => (
        <Grid item key={id}>
            <div
                className={
                    choosenImage === takeFirstName(name).toString()
                        ? classes.imageHighlightSelect
                        : classes.imageNormal
                }
            >
                <img
                    src={require(`./images/${image}`)}
                    alt={name + ' alt'}
                    style={{ height: '200px', width: '300px' }}
                    id={takeFirstName(name)}
                    onClick={(e) => {
                        setChoosenImage(e.target.id);
                        findUserInfo(id);
                    }}
                />
            </div>
        </Grid>
    );

    const findUserInfo = (userId) => {
        const isInZoomChat = zoomChat.some((el) => el.id === userId);
        if (!isInZoomChat) {
            const filtered = userData.filter(({ id }) => id === userId);
            setZoomChat(zoomChat.concat(filtered));
        }
    };

    const ZoomChat = ({ name, linkedin, description, role, id }) => (
        <Grid item xs={9} key={id} className={classes.zoomChatStyles}>
            <Typography>From {name} to Everyone</Typography>
            <Typography>ROLE: {role}</Typography>
            <Typography>{description} </Typography>

            <Typography> {linkedin}</Typography>
        </Grid>
    );

    return (
        <Grid
            container
            justify="space-around"
            alignContent="center"
            direction="row"
        >
            <Grid
                container
                style={{
                    backgroundColor: '#333333',
                    borderRadius: '20px 20px 0 0',
                    border: 'none',
                }}
            >
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            width: '100%',
                            height: '52px',
                        }}
                    >
                        <Typography className={classes.omouTeamText}>
                            OMOU TEAM
                        </Typography>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={7}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {userData.map((data) => (
                        <ZoomImageBox
                            image={data.image}
                            name={data.name}
                            id={data.id}
                        />
                    ))}
                </Grid>

                <Grid
                    xs={5}
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.zoomChat}
                >
                    {zoomChat.map((data) => (
                        <ZoomChat
                            name={data.name}
                            linkedin={data.linkedin}
                            description={data.description}
                            role={data.role}
                            id={data.id}
                        />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ZoomContainer;
