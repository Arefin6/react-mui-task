import { Grid } from '@material-ui/core';
import React from 'react';
import bg from '../../bg.png';

const Header = () => {
    return (
        <div className="header">
        <Grid 
         container
         spacing={2}
         justify="center"
        >
        
        <img src={bg} alt="header"/>
        </Grid>
            
        </div>
    );
};

export default Header;