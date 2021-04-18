import { Button, FormLabel, Grid, TextField } from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    text:{
        width:"90%",
        marginBottom:'20px'
      },
      btnRounded:{
        borderRadius:"20px 20px 20px 20px"
       }
}));
const AddBenefitForm = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item sm={12} md={12}>
               <FormLabel 
                 >Title*</FormLabel>
                 <br></br>
                 <br></br>
                  <TextField
                   variant="standard"
                   className={classes.text}
                   placeholder="Enter Text"
                  /> 
               </Grid> 
               <Grid item sm={12} md={12}>
               <FormLabel 
                 >Description*</FormLabel>
                 <br></br>
                 <br></br>
                  <TextField
                   variant="standard"
                   className={classes.text}
                   placeholder="Enter Text"
                  /> 
                   <Button 
           variant="outlined" 
           color="default"
           style={{marginRight:'20px'}}
           className={classes.btnRounded}
           >
                Back
            </Button>   
           <Button 
           variant="contained" 
           color="primary"
           className={classes.btnRounded}
           >
                Save 
            </Button>
               </Grid> 
        </div>
    );
};

export default AddBenefitForm;