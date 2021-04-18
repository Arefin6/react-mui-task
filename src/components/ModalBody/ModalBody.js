import { Grid } from '@material-ui/core';
import React from 'react';
import Benefits from '../../data/BenefitsData';
import AddBenefitForm from '../AddBenefitForm/AddBenefitForm';
import BenefitAddData from '../BenefitAddData/BenefitAddData';

const ModalBody = () => {
    return (
        <div>
            <h4 style={{color:'#2A3B8F'}}>Add Benefits</h4>
             <Grid container>
             {
               Benefits.map((benefit,index) =>
                <BenefitAddData key={index} benefit={benefit}></BenefitAddData>
             ) 
             }
             <AddBenefitForm></AddBenefitForm>
             </Grid>
            
        </div>
    );
};

export default ModalBody;