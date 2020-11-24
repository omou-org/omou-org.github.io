import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

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
import { getElementError } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
    contactUsJumboTron: {
        margin: '10em',
    },
    requestDemoText: {
        fontSize: '23px',
        paddingBottom: '2em',
        color: '#43B5D9',
    },
    requestDemoSubText: {
        fontSize: '23px',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: theme.spacing(10),
    },
    formText: {
        fontSize: '25px',
    },
}));

const ContactOmou = () => {
    const classes = useStyles();
    const [stepper, setStepper] = useState(1);
    const [fromName, setFromName] = useState({ value: '', isVisible: true });
    const [emailCategory, setEmailCategory] = useState({
        value: '',
        isVisible: false,
    });
    const [messageHTML, setMessage] = useState({ value: '', isVisible: false });
    const [reachedAt, setReachedAt] = useState({ value: '', isVisible: false });
    const privatePolicyText = 'We are aways your inbox is a sacred place';

    // create state for input values, stored as objects
    // [ fromName, setFromName ] = useState({value: "", isVisible: true})
    //onChange function for input values
    // check if value is valid
    // run function to show next form
    // set the isVisible to true and fade next component
    // set steps in state + 1

    const nextStep = () => {
        setStepper(stepper + 1);
    };

    const handleEmailCategoryChange = (event) => {
        setEmailCategory({ value: event.target.value });
        nextStep();
    };

    const handleReachedAtCategoryChange = (event) => {
        setReachedAt({ value: event.target.value });
        nextStep();
    };

    const handleInfoChange = (event) => {
        setMessage({ value: event.target.value });
        nextStep();
    };


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            nextStep();
        }
    };

    console.log(stepper);

    return (
        <Grid container>
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
                <form onSubmit={e => { e.preventDefault() }} className={classes.formContainer}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={8}>
                            <Typography className={classes.formText}>
                                My name is:
                                <span>
                                    <TextField
                                        onKeyDown={handleKeyDown}
                                    ></TextField>
                                </span>
                            </Typography>
                        </Grid>
                        {stepper >= 2 &&
                            <Fade in={true} timeout={{enter:1000}}>
                                <Grid item xs={7} className={classes.animatedDiv}>
                                    <Typography className={classes.formText}>
                                        and I would like to :
                                    <span>
                                            <FormControl>
                                                <Select
                                                    id="email-category"
                                                    value={emailCategory.value}
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
                            </Fade>}
                        <Grid item>
                            {stepper >= 3 &&
                            <Fade in={true} timeout={{enter:1000}}>
                                <div>
                                    <Typography className={classes.formText}>
                                        Here are some details...
                                    </Typography>
                                    <TextField
                                        variant="outlined"
                                        style={{ height: '166px' }}
                                        onKeyDown={handleKeyDown}
                                        inputProps={{
                                            style: {
                                                height: '166px',
                                                width: '700px',
                                                padding: '0 14px',
                                            },
                                        }}
                                    ></TextField>
                                </div>
                                </Fade>}

                            {stepper >= 4 &&
                                <Fade in={true} timeout={{enter:1000}}>
                                    <Grid item>
                                        <Typography className={classes.formText}>
                                            and I can be reached by :{' '}
                                            <span>
                                                <FormControl>
                                                    <Select
                                                        id="reachedAt-category"
                                                        value={reachedAt.value}
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
                                                <TextField></TextField>
                                            </span>
                                        </Typography>
                                    </Grid>
                                </Fade>}
                            {stepper >= 5 &&
                                <Fade in={true} timeout={{enter:1000}}>
                                    <div>
                                    <FormControl component="fieldset">
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
                                    </FormControl>
                                    <Grid item xs={12}>
                                        <Button>Send</Button>
                                    </Grid>
                                    </div>
                                </Fade>}
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default ContactOmou;
