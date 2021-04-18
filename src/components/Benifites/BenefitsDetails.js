import { Grid } from '@material-ui/core';
import React, { useState } from 'react';


const BenefitsDetails = ({benefit}) => {
    const [checked,setChecked] = useState(false)

     const handleClick = (e) =>{
         setChecked(true)
         e.preventDefault()
     }
    return (
        <Grid item md={4}>
            <button className={checked ? 'active benefits':'benefits'}>
               {benefit.icon} 
              <p>{benefit.title}</p>
               <span  onClick={handleClick} className='btn'>
                   {
                     checked && <span>&#10004;</span>
                   }
                  
               </span>
            </button>
        </Grid>
       
    );
};

export default BenefitsDetails;