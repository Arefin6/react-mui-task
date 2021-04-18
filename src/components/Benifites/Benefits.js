import { Button, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import BenefitsData from '../../data/BenefitsData';
import BenefitsDetails from './BenefitsDetails';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';


const useStyles = makeStyles((theme) => ({
   
    benefitColor:{
      color:'#f15a29'
    },
    grid:{
      marginLeft:'80%'
    },
    btnRounded:{
     borderRadius:"20px 20px 20px 20px"
    }
    
   
  }));

const Benefits = () => {
    const classes = useStyles();
   
    return (
        <>
         <h2 className={classes.benefitColor}>Benefits</h2>
          <Grid container>
            
            {BenefitsData.map((benefit,index) =>
             <BenefitsDetails key={index} benefit={benefit}></BenefitsDetails>
          )} 
           <Grid item md={12} className={classes.grid}>
           <Button 
           variant="outlined" 
           color="default"
           style={{marginRight:'20px'}}
           className={classes.btnRounded}
           >
                Skip
            </Button>   
           <Button 
           variant="contained" 
           color="primary"
           endIcon ={<NavigateNextRoundedIcon/>}
           className={classes.btnRounded}
           >
                Save 
            </Button>
           </Grid>
          </Grid>
        
        </>
    );
};

export default Benefits;