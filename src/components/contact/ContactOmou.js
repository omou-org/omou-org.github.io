import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import emailjs from 'emailjs-com';

import {
    Grid,
    Typography,
    Button,
    TextField,
    FormControl,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    contactUsJumboTron: {
        margin: '10em 10em 5em 10em',
    },
    requestDemoText: {
        fontSize: '23px',
        paddingBottom: '2em',
        color: '#43B5D9',
    },
    requestDemoSubText: {
        fontSize: '23px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    },
    formContainer: {
        '& .MuiInputBase-input': {
            fontSize: '23px',
            lineHeight: '1em',
        },
        display: 'flex',
        flexDirection: 'row',

        margin: theme.spacing(10),
    },
    formText: {
        paddingBottom: '1em',

        fontSize: '25px',
    },
    contactUsButton: {
        width: '472px',
        height: '64px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        backgroundColor: '#43B5D9',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
    },
}));

const ContactOmou = () => {
    const classes = useStyles();
    const [stepper, setStepper] = useState(1);
    const [emailCategory, setEmailCategory] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [fromName, setFromName] = useState('');
    const [messageHTML, setMessageHTML] = useState('');
    const [reachedAtCategory, setReachedAtCategory] = useState('');
    const [errorText, setErrorText] = useState('');

    // Animation controls
    const [isVisible, setIsVisible] = useState({
        type: true,
        message: true,
        reachedBy: true,
    });

    const privatePolicyText = 'We are aways your inbox is a sacred place';

    const nextStep = () => {
        setStepper(stepper + 1);
    };

    const handleEmailCategoryChange = (event) => {
        setEmailCategory(event.target.value);
        setIsVisible((prevState) => {
            return { ...prevState, message: true };
        });
        nextStep();
    };

    const handleReachedAtCategoryChange = (event) => {
        setReachedAtCategory(event.target.value);
    };

    // If user picks phone , change validation

    // Email validation
    const handleEmailInput = (event) => {
        setEmailInput(event.target.value);
        switch (reachedAtCategory) {
            case 'email':
                emailInput.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
                    ? setErrorText('')
                    : setErrorText('Invalid Email');
                break;
            case 'phone':
                event.target.value.match(
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
                )
                    ? setErrorText('')
                    : setErrorText('Invalid Phone Number');
                break;
            default:
                setErrorText('Please select a category');
        }
    };
    // If the form is on name or message then we listen for Enter keys to move to next step
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (stepper === 1) {
                setIsVisible((prevState) => {
                    return { ...prevState, type: true };
                });
                setFromName(event.target.value);
                nextStep();
            }
        }
        if (event.target.value.length > 5 && stepper === 3) {
            setIsVisible((prevState) => {
                return { ...prevState, reachedBy: true };
            });
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'gmail',
                'template_L8JA194M',
                {
                    from_name: fromName,
                    message_html: messageHTML,
                    reply_to: emailInput,
                },
                'user_CddYW1ypBZ46FHYjjgeZG'
            )
            .then(
                (result) => {
                    console.log('message sent');
                    // setMessageSent(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        // setMessageSent(true)
    };

    return (
        <Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignContent="center"
            >
                <div className={classes.contactUsJumboTron}>
                    <Typography style={{ fontSize: '72px' }}>
                        Contact <span style={{ color: '#43B5D9' }}>OMOU</span>
                    </Typography>
                </div>

                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignContent="center"
                >
                    <Grid item xs={7}>
                        <Typography className={classes.requestDemoText}>
                            REQUEST A DEMO
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography className={classes.requestDemoSubText}>
                            We at Omou want to remove all physical barriers that
                            prevent students, parents, and teachers from
                            connecting with a tutoring center’s community. In
                            the end, all that separates you and your tutoring
                            community is just 1 click away.
                        </Typography>
                    </Grid>
                </Grid>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        className={classes.formContainer}
                    >
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Fade in={isVisible.type} timeout={{ enter: 1000 }}>
                                <Grid item xs={12}>
                                    <Typography className={classes.formText}>
                                        My name is:
                                        <span>
                                            <TextField
                                                onKeyDown={handleKeyDown}
                                                required={true}
                                                inputProps={{
                                                    style: {
                                                        padding: 5,
                                                    },
                                                }}
                                            ></TextField>
                                        </span>
                                    </Typography>
                                </Grid>
                            </Fade>
                            <Fade in={isVisible.type} timeout={{ enter: 1500 }}>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.animatedDiv}
                                >
                                    <Typography className={classes.formText}>
                                        and I would like to reach:
                                        <span>
                                            <FormControl
                                                required
                                                style={{
                                                    minWidth: 175,
                                                }}
                                            >
                                                <Select
                                                    id="email-category"
                                                    value={emailCategory}
                                                    onChange={
                                                        handleEmailCategoryChange
                                                    }
                                                >
                                                    <MenuItem value="general">
                                                        General
                                                    </MenuItem>
                                                    <MenuItem value="support">
                                                        Support
                                                    </MenuItem>
                                                    <MenuItem value="sales">
                                                        Sales
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </span>
                                    </Typography>
                                </Grid>
                            </Fade>

                            <Grid item>
                                <Fade
                                    in={isVisible.message}
                                    timeout={{ enter: 2000 }}
                                >
                                    <div>
                                        <Typography
                                            className={classes.formText}
                                        >
                                            Here are some details...
                                        </Typography>
                                        <TextField
                                            variant="outlined"
                                            style={{ height: '166px' }}
                                            onKeyDown={handleKeyDown}
                                            multiline
                                            rowsMax={10}
                                            inputProps={{
                                                style: {
                                                    height: '166px',
                                                    width: '700px',
                                                    padding: '0 14px',
                                                },
                                            }}
                                        ></TextField>
                                    </div>
                                </Fade>

                                <Fade
                                    in={isVisible.reachedBy}
                                    timeout={{ enter: 2500 }}
                                >
                                    <Grid item>
                                        <Typography
                                            style={{
                                                fontSize: '25px',
                                                paddingTop: '3em',
                                            }}
                                        >
                                            and I can be reached by :
                                            <span>
                                                <FormControl
                                                    style={{ minWidth: 120 }}
                                                >
                                                    <Select
                                                        id="reachedAt-category"
                                                        value={
                                                            reachedAtCategory
                                                        }
                                                        onChange={
                                                            handleReachedAtCategoryChange
                                                        }
                                                    >
                                                        <MenuItem value="email">
                                                            Email
                                                        </MenuItem>
                                                        <MenuItem value="phone">
                                                            Phone
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </span>
                                            at:
                                            <span>
                                                <TextField
                                                    onChange={handleEmailInput}
                                                    error={errorText}
                                                    helperText={errorText}
                                                    inputProps={{
                                                        style: {
                                                            padding: 5,
                                                        },
                                                    }}
                                                ></TextField>
                                            </span>
                                        </Typography>
                                    </Grid>
                                </Fade>

                                <Fade
                                    in={isVisible.reachedBy}
                                    timeout={{ enter: 3000 }}
                                >
                                    <div>
                                        {/**
                                         * This is where a terms and conditions or
                                         * private policy - pending
                                         *
                                         */}

                                        {/* <FormControl
                                            component="fieldset"
                                            style={{ paddingTop: '1em' }}
                                        >
                                            <FormControlLabel
                                                value={'top'}
                                                control={
                                                    <Checkbox
                                                        inputProps={{
                                                            'aria-label':
                                                                'primary checkbox',
                                                        }}
                                                    />
                                                }
                                                label={privatePolicyText}
                                                labelPlacement="end"
                                            />
                                        </FormControl> */}
                                        <Grid
                                            item
                                            xs={12}
                                            style={{ paddingTop: '2.5em' }}
                                        >
                                            <Button
                                                className={
                                                    classes.contactUsButton
                                                }
                                                onClick={sendEmail}
                                            >
                                                Contact Us
                                            </Button>
                                        </Grid>
                                    </div>
                                </Fade>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default ContactOmou;
