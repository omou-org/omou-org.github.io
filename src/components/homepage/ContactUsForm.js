import React from "react";
import {Grid, Typography, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles( (theme) => ({
    contactUsForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        margin: theme.spacing(10),
    },
    contactUsContainer :{
        
    },
    formInput: {
        width: "300px"
    }
}))



const ContactUsForm = () => {
const classes = useStyles();

    return (
        <Grid 
        container
        justify="center"
        direction="row"
        className={classes.contactUsContainer}
>
        
            <Grid item  >
                <Typography variant="h3">BOOK A DEMO</Typography>

            </Grid>
            <Grid 
            container
            direction="row"
            justify="center"
             alignItems="center"
            >
            <Grid item xs={12}>
            <form className={classes.contactUsForm}>
            <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  style={{textAlign: "center"}}>

            
                <Grid item xs={6}>
                    <Typography>Name</Typography>
                    <TextField 
                     required
                     variant="outlined" 
                     id="name"
                     className={classes.formInput}
                     />
                </Grid>
        
                <Grid item xs={6}>
                <Typography>Phone</Typography>
                    <TextField 
                    required
                    variant="outlined" 
                     id="standard-required"  />
                </Grid >

                <Grid item xs={6}  style={{textAlign: "center"}}>
            <Typography>Email</Typography>
            <TextField 
            required
            variant="outlined"  
            fullWidth
            id="standard-required"  />
        </Grid>      
        <Grid item xs={6} >
        
        </Grid>      

                </Grid>
     
        </form>    
        </Grid>

</Grid>  
                    </Grid>

   


    )
}



export default ContactUsForm;