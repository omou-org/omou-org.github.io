import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Button, IconButton } from '@material-ui/core';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { betaPageFaqData } from './betaPageData.js';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { primaryColor } from '../../theme/colors';
const Accordion = withStyles({
    root: {
        backgroundColor: '#FAFAFA',
        boxShadow: 'none',
        paddingBottom: '1vh',
        paddingTop: '1vh',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);
const useStyles = makeStyles({
    faqContainer: {
        backgroundColor: '#FAFAFA',
        padding: '5em',
        width: '100%',
    },
    faqHeading: {
        fontFamily: 'Montserrat',
        fontSize: '36px',
        fontWeight: '700',
    },
});

const FaqSection = () => {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const classes = useStyles();

    const QuestionContainer = ({ question, answer, id }) => (
        <Grid item xs={12}>
            <Accordion
                square
                expanded={expanded === id}
                onChange={handleChange(id)}
            >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>
                        {id}. {question.toUpperCase()}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: '20px' }}>
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
    return (
        <Grid className={classes.faqContainer}>
            <Grid
                container
                item
                justify="space-between"
                direction="row"
                alignItems="center"
            >
                <Grid item xs={12} style={{ paddingBottom: '5em' }}>
                    <Typography className={classes.faqHeading}>
                        FREQUENTLY ASKED QUESTIONS
                    </Typography>
                </Grid>

                <Grid
                    item
                    justify="space-between"
                    direction="row"
                    alignItems="center"
                    style={{ width: '100%' }}
                >
                    {betaPageFaqData.map(({ key, question, answer }) => (
                        <QuestionContainer
                            question={question}
                            answer={answer}
                            id={key}
                        />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FaqSection;
