import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Box } from '@material-ui/core';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../theme/colors';
import bottomWave from '../homepage/homeimages/bottomWave.svg';

const useStyles = makeStyles((theme) => ({
    formBox: {
        height: '550px',
        width: '600px',
        backgroundColor: '#747679',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
    },
    nameInput: {
        width: '100% ',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 500,
        borderRadius: '30px',
        backgroundColor: 'white',
    },
    emailInput: {
        width: '100% ',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 500,
        borderRadius: '30px',
        backgroundColor: 'white',
    },
    formLabelText: {
        marginLeft: '2em',
        textAlign: 'left',
        padding: '10px 0 10px 0',
        fontSize: '22px',
        color: 'white',
        fontFamily: 'Montserrat',
    },
    formHeadingText: {
        fontSize: '20px',
        color: 'white',
        fontFamily: 'Montserrat',
    },
    signUpButton: {
        width: '250px',
        height: '60px',
        fontSize: '22px',
        borderRadius: '45px',
        backgroundColor: 'white',
    },
    contactUsForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: theme.spacing(10),
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        },
    },
    contactUsContainer: {
        paddingTop: '4em',
    },
    namePhoneInput: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 500,
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

const GoogleSheetsForm = ({ contactUs }) => {
    const classes = useStyles();

    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
    const [formData, setFormData] = useState({ Name: '', Email: '' });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (row) => {
        try {
            await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
            });
            // loads document properties and worksheets
            await doc.loadInfo();

            const sheet = doc.sheetsById[SHEET_ID];
            console.log(sheet);
            const result = await sheet.addRow(row);
            console.log(result);
        } catch (e) {
            console.error('Error: ', e);
        }
    };

    const handleNameInput = (e) => {
        setFormData({ ...formData, Name: e.target.value });
    };

    const handleEmailInput = (e) => {
        setFormData({ ...formData, Email: e.target.value });
    };

    const handleFormSubmit = () => {
        appendSpreadsheet(formData);

        setFormData({ Name: '', Email: '' });
    };

    return (
        <>
            {contactUs ? (
                <Grid
                    container
                    justify="center"
                    direction="row"
                    className={classes.contactUsContainer}
                >
                    <Grid item xs={8} md={6} style={{ textAlign: 'center' }}>
                        <Typography
                            style={{
                                fontSize: '47px',
                                fontWeight: '700',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            JOIN THE EARLY ACCESS PROGRAM FOR FREE TODAY!
                        </Typography>
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
                                <Grid item xs={12}>
                                    <Typography className={classes.inputText}>
                                        FULL NAME
                                    </Typography>

                                    <TextField
                                        variant="outlined"
                                        id="Name"
                                        value={formData.Name}
                                        fullWidth
                                        onChange={handleNameInput}
                                        InputProps={{
                                            classes: {
                                                root: classes.namePhoneInput,
                                            },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography
                                        className={classes.emailInputText}
                                    >
                                        EMAIL
                                    </Typography>

                                    <TextField
                                        required
                                        variant="outlined"
                                        value={formData.Email}
                                        onChange={handleEmailInput}
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
                            <Button
                                className={classes.learnMoreButton}
                                onClick={handleFormSubmit}
                            >
                                Learn more
                            </Button>
                        </Grid>
                    </Grid>
                    <img
                        src={bottomWave}
                        alt="wave2"
                        style={{
                            width: '100%',

                            display: 'block',
                        }}
                    />
                </Grid>
            ) : (
                <form>
                    <Grid item style={{ padding: '6vh' }}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className={classes.formBox}
                        >
                            <Grid item xs={12}>
                                <Typography className={classes.formHeadingText}>
                                    TRY IT FOR FREE TODAY! SIGN UP HERE.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.formLabelText}>
                                    Name
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    id="name"
                                    style={{ width: '90%' }}
                                    value={formData.Name}
                                    onChange={handleNameInput}
                                    InputProps={{
                                        classes: {
                                            root: classes.nameInput,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.formLabelText}>
                                    Email*
                                </Typography>
                                <TextField
                                    required
                                    variant="outlined"
                                    id="email"
                                    value={formData.Email}
                                    style={{ width: '90%' }}
                                    onChange={handleEmailInput}
                                    InputProps={{
                                        classes: {
                                            root: classes.emailInput,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                style={{ padding: '2vh 0 2vh 0' }}
                            >
                                <Button
                                    className={classes.signUpButton}
                                    onClick={handleFormSubmit}
                                >
                                    SIGN UP
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            )}
        </>
    );
};

export default GoogleSheetsForm;
