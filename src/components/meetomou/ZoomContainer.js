import React, { useState, useRef, useEffect, Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { userData } from './userData.js';

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
        overflow: 'scroll',
        color: 'white',
        height: '1200px',
        minHeight: '100%',
    },
    imageHighlightSelect: {
        position: 'relative',
        outline: 'solid 6px #24FF00',
        outlineOffset: '-6px',
    },
    imageNormal: {
        position: 'relative',
        border: ' solid 2px none',
    },
    imageTextName: {
        position: 'absolute',
        fontFamily: 'Montserrat',
        bottom: '3px',

        backgroundColor: 'rgba(0, 0, 0, 0.5);',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '5px 10px 5px 10px',
    },
    zoomChatStylesHighlighted: {
        padding: '1em',
        backgroundColor: 'rgba(196, 196, 196, 0.15)',
    },
    zoomChatStylesNormal: {
        padding: '1em',
        backgroundColor: '#333333',
    },
});

const ZoomContainer = () => {
    const classes = useStyles();
    const [choosenImage, setChoosenImage] = useState(null);
    const [zoomChat, setZoomChat] = useState([]);
    const [tasks, setTasks] = useState([]);
    let chatRef = useRef();

    const ZoomImageBox = ({ image, name, id, i }) => {
        return (
            <Grid item>
                <div
                    className={
                        choosenImage === id.toString()
                            ? classes.imageHighlightSelect
                            : classes.imageNormal
                    }
                >
                    <img
                        src={require(`./images/${image}`)}
                        alt={name + ' alt'}
                        style={{ height: '200px', width: '300px' }}
                        id={id}
                        onClick={(e) => {
                            setChoosenImage(e.target.id);
                            findUserInfo(id);
                        }}
                    />
                    <Typography className={classes.imageTextName}>
                        {name}
                    </Typography>
                </div>
            </Grid>
        );
    };

    const exicuteScroll = () => {
        if (chatRef.current) {
            chatRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest',
            });
        }
    };

    const findUserInfo = (userId, i) => {
        const isInZoomChat = zoomChat.some((el) => el.id === userId);
        if (!isInZoomChat) {
            const filtered = userData.filter(({ id }) => id === userId);
            exicuteScroll();
            setZoomChat(zoomChat.concat(filtered));
        }
    };

    console.log(chatRef);
    // shared store
    // Parent :
    // create a hook

    const ZoomChat = ({ name, linkedin, description, role, id }) => {
        return (
            <Grid
                item
                id={id}
                className={
                    choosenImage === id.toString()
                        ? classes.zoomChatStylesHighlighted
                        : classes.zoomChatStylesNormal
                }
                ref={(ref) => {}}
            >
                <Typography style={{ fontWeight: '700' }}>
                    FROM{' '}
                    <span style={{ color: '#43B5D9' }}>
                        {name.toUpperCase()}
                    </span>{' '}
                    TO
                    <span style={{ color: '#43B5D9' }}> EVERYONE</span>{' '}
                </Typography>
                <Typography style={{ paddingTop: '1em', fontWeight: '700' }}>
                    {role}
                </Typography>
                <Typography style={{ fontWeight: 'bold', fontSize: '15px' }}>
                    {description}
                </Typography>
                <a href={linkedin} target="_blank">
                    <Typography
                        style={{
                            color: 'white',
                            textDecoration: 'underline',
                            fontWeight: '700',
                            paddingTop: '10px',
                        }}
                    >
                        {linkedin}
                    </Typography>
                </a>
            </Grid>
        );
    };

    return (
        <Grid
            container
            justify="space-around"
            alignContent="center"
            direction="row"
            spacing={0}
            style={{
                backgroundColor: '#333333',
                borderRadius: '20px 20px 0 0',
                border: 'none',
                paddingBottom: '2vh',
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

            <Grid container>
                <Grid
                    item
                    xs={7}
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                >
                    {userData.map((data, i) => (
                        <Grid item>
                            <div
                                className={
                                    choosenImage === data.id.toString()
                                        ? classes.imageHighlightSelect
                                        : classes.imageNormal
                                }
                                key={i}
                            >
                                <img
                                    src={require(`./images/${data.image}`)}
                                    alt={data.name + ' alt'}
                                    style={{ height: '200px', width: '300px' }}
                                    id={data.id}
                                    onClick={(e) => {
                                        findUserInfo(data.id);
                                        setChoosenImage(e.target.id);
                                    }}
                                />
                                <Typography className={classes.imageTextName}>
                                    {data.name}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>

                <Grid
                    item
                    xs={5}
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.zoomChat}
                >
                    {zoomChat.map((data, i) => (
                        <div
                            ref={(ref) => {
                                chatRef.current = ref;
                            }}
                        >
                            <Grid
                                item
                                id={data.id}
                                className={
                                    choosenImage === data.id.toString()
                                        ? classes.zoomChatStylesHighlighted
                                        : classes.zoomChatStylesNormal
                                }
                            >
                                <Typography style={{ fontWeight: '700' }}>
                                    FROM{' '}
                                    <span style={{ color: '#43B5D9' }}>
                                        {data.name.toUpperCase()}
                                    </span>{' '}
                                    TO
                                    <span style={{ color: '#43B5D9' }}>
                                        {' '}
                                        EVERYONE
                                    </span>{' '}
                                </Typography>
                                <Typography
                                    style={{
                                        paddingTop: '1em',
                                        fontWeight: '700',
                                    }}
                                >
                                    {data.role}
                                </Typography>
                                <Typography
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: '15px',
                                    }}
                                >
                                    {data.description}
                                </Typography>
                                <a href={data.linkedin} target="_blank">
                                    <Typography
                                        style={{
                                            color: 'white',
                                            textDecoration: 'underline',
                                            fontWeight: '700',
                                            paddingTop: '10px',
                                        }}
                                    >
                                        {data.linkedin}
                                    </Typography>
                                </a>
                            </Grid>
                        </div>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ZoomContainer;
