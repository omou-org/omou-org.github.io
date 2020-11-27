import React, { useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

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
