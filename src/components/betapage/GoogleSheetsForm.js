import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Box } from '@material-ui/core';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formBox: {
        height: '450px',
        width: '400px',
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
        marginRight: '13em',
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
        width: '150px',
        height: '42px',
        borderRadius: '45px',
        backgroundColor: 'white',
    },
}));

const GoogleSheetsForm = () => {
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
    };

    return (
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
                            style={{ width: '90%' }}
                            onChange={handleEmailInput}
                            InputProps={{
                                classes: {
                                    root: classes.emailInput,
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ padding: '2vh 0 2vh 0' }}>
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
    );
};

export default GoogleSheetsForm;
