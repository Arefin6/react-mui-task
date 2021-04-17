import {Button, FormLabel, Grid,TextareaAutosize, TextField } from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2%',
        paddingTop: '2%',
        paddingLeft: '8.5%',
        
    },
    container:{
       color:'#666',
       background: '#fff' 
    },
    text:{
      width:"90%",
      marginBottom:'20px'
    },
    addBtn:{
      marginLeft:'80%',
      borderRadius: '24px 24px 24px 24px',
      padding:'20px'
    }
 
   
  }));


const CompanyForm = () => {
    const classes = useStyles();
    return (
        <>
         <form className={classes.root}>
              <Grid
              container
              className={classes.container}
              >
               <Grid item  md={12} >
                 <FormLabel 
                 >About Company</FormLabel>
                 <br></br>
                 <br></br>
                 <TextareaAutosize
                    rowsMax={20}
                    style={{width:'92%', height:"5rem",margin:"1rem 0"}}
                    className="text"
                    placeholder="About company"
                    />
               </Grid> 

               <Grid  item md={6} sm={12}>
               <FormLabel 
                 >website</FormLabel>
                 <br></br>
                 <br></br>
                  <TextField
                   variant="outlined"
                   className={classes.text}
                   placeholder="Enter Text"
                  /> 
               </Grid> 
               <Grid item sm={12} md={6}>
               <FormLabel 
                 >company</FormLabel>
                 <br></br>
                 <br></br>
                  <TextField
                   variant="outlined"
                   className={classes.text}
                   placeholder="Enter Text"
                  /> 
               </Grid> 
               <Grid item sm={12} md={6}>
               <FormLabel 
                 >Headquarters*</FormLabel>
                 <br></br>
                 <br></br>
                  <TextField
                   variant="outlined"
                   className={classes.text}
                   placeholder="Enter Text"
                  /> 
               </Grid> 
               <Grid item sm={12} md={6}>
               <FormLabel 
                 >industry*</FormLabel>
                 <br></br>
                 <br></br>
                  <TextField
                   variant="outlined"
                   className={classes.text}
                   placeholder="Enter Text"
                  /> 
               </Grid> 

               <Grid item sm={12} md={6}>
               <FormLabel 
                 >Type</FormLabel>
                 <br></br>
                 <br></br>
                  <TextField
                   variant="outlined"
                   className={classes.text}
                   placeholder="Enter Text"
                  /> 
               </Grid> 
               <Grid item sm={12} md={6}>
               <FormLabel 
                 >Founded</FormLabel>
                 <br></br>
                 <br></br>
                  <TextField
                   variant="outlined"
                   className={classes.text}
                   placeholder="Enter Text"
                  /> 
               </Grid> 

               <Grid item sm={12} md={12}>
               <FormLabel 
                 >Specialties</FormLabel>
                 <br></br>
                 <br></br>
                  <TextField
                   variant="outlined"
                   className={classes.text}
                   placeholder="Enter Text"
                  /> 
               </Grid> 
               <Grid
                  item sm={12} md={12}
                >
                  <Button
                  variant="outlined"
                  className={classes.addBtn}
                  >Add Benefits</Button>
                </Grid>
               

              </Grid>
         </form> 
        </>
    );
};

export default CompanyForm; 