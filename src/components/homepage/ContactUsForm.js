import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../theme/colors';
import bottomWave from './homeimages/bottomWave.svg';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    contactUsForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: theme.spacing(10),
        width: '50%',
    },
    contactUsContainer: {
        paddingTop: '4em',
    },
    namePhoneInput: {
        width: '200%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 500,
        borderRadius: '30px',
    },
    emailInput: {
        borderRadius: '30px',
    },
    inputText: {
        paddingBottom: '20px',
        fontSize: '22px',
        fontWeight: '300',
    },
    emailInputText: {
        paddingBottom: '20px',
        paddingTop: '20px',
        fontSize: '22px',
        fontWeight: '300',
    },
    learnMoreButton: {
        width: '166px',
        height: '62px',
        borderRadius: '20px',
        backgroundColor: primaryColor,
        color: 'white',
    },
}));

const ContactUsForm = () => {
    const classes = useStyles();
    const [fromName, setFromName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [replyTo, setReplyTo] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    // Connect email feature

    const location = useLocation();

    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .send(
                'gmail',
                'template_L8JA194M',
                {
                    from_name: fromName,
                    message_html: userEmail,
                    reply_to: replyTo,
                },
                'user_CddYW1ypBZ46FHYjjgeZG'
            )
            .then(
                (result) => {
                    setMessageSent(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        setMessageSent(true);
    }

    const handleNameChange = (e) => {
        setFromName(e.target.value);
    };
    const handleReplyToEmail = (e) => {
        setReplyTo(e.target.value);
    };
    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };

    return (
        <Grid
            container
            justify="center"
            direction="row"
            className={classes.contactUsContainer}
        >
            <Grid item>
                <Typography variant="h3">BOOK A DEMO</Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <form className={classes.contactUsForm}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item xs={6}>
                            <Typography className={classes.inputText}>
                                FULL NAME
                            </Typography>

                            <TextField
                                required
                                variant="outlined"
                                id="Name"
                                value={fromName}
                                onChange={handleNameChange}
                                InputProps={{
                                    classes: {
                                        root: classes.namePhoneInput,
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Typography className={classes.inputText}>
                                PHONE NUMBER
                            </Typography>
                            <TextField
                                required
                                variant="outlined"
                                id="standard-required"
                                InputProps={{
                                    classes: {
                                        root: classes.namePhoneInput,
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography className={classes.emailInputText}>
                                EMAIL
                            </Typography>

                            <TextField
                                required
                                variant="outlined"
                                value={userEmail}
                                onChange={handleEmailChange}
                                fullWidth
                                id="standard-required"
                                InputProps={{
                                    classes: {
                                        root: classes.emailInput,
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Grid>

            <Grid container justify="center" direction="row">
                <Grid item>
                    <Button className={classes.learnMoreButton}>
                        Learn more
                    </Button>
                </Grid>
            </Grid>
            <img src={bottomWave} alt="wave2" style={{ width: '100%' }} />
        </Grid>
    );
};

export default ContactUsForm;
