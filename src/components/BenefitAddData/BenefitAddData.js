import { Grid } from '@material-ui/core';
import React from 'react';

const BenefitAddData = ({benefit}) => {
    return (
        <div>
            <Grid item md={12}>
            <button className='benefits'>
 
              <p>{benefit.title}</p>
               
            </button>
        </Grid>
        </div>
    );
};

export default BenefitAddData;