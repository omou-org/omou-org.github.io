import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../theme/colors';
import bottomWave from './homeimages/bottomWave.svg';

const useStyles = makeStyles((theme) => ({
    contactUsForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: theme.spacing(10),
        width: '50%',
    },
    contactUsContainer: {},
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
                                id="name"
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
