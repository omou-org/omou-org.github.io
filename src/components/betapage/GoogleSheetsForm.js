import React, { useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

const SPREADSHEET_ID = '1VZwL2O9_QpoOOKXU8WyVjDRO7wWJzQx5ylizdtM_UJE';
const CLIENT_ID =
    '281034201526-kk4ve7gtbj93krlsmb38q94jnbbmj78i.apps.googleusercontent.com';
const API_KEY = 'AIzaSyB9SamxnXpDQC7yk5qVHTOiQly4WVKQthU';

//'GuAWocZ28OiVB09JJPh4I8Nj';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

//play ground

const ACCESS_TOKEN = 'ya29.a0AfH6SMBjbowJMt7DALWb26Tc_pJDIjLD6sL7d';

const GoogleSheetsForm = () => {
    const updateSheetValues = () => {
        fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}:batchUpdate`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //update this token with yours.
                    Authorization: `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    requests: [
                        {
                            repeatCell: {
                                range: {
                                    startColumnIndex: 0,
                                    endColumnIndex: 1,
                                    startRowIndex: 0,
                                    endRowIndex: 1,
                                    sheetId: 0,
                                },
                                cell: {
                                    userEnteredValue: {
                                        numberValue: 10,
                                    },
                                },
                                fields: '*',
                            },
                        },
                    ],
                }),
            }
        );
    };

    return (
        <form>
            <Grid container>
                <Grid item>
                    <Typography>First Name</Typography>
                    <TextField required variant="outlined" id="Name" />
                    <Button onClick={updateSheetValues}>Update A1</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default GoogleSheetsForm;
