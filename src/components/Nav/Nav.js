import React from 'react';
import './Nav.css';
import {AppBar,Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      background:'#F7F6Fb',
      color:'#666666',
      boxShadow:'none',
      maxHeight:'30vh',
      borderBottom:'1px solid #666'
    },
    nav:{
       marginLeft:'auto',
       marginRight:'20px' 
    },
    navItem:{
        padding:".9rem",
        fontSize:'16px'
    }
   
  }));


const Nav = () => {
    const classes = useStyles();
    return (
        <div>
         <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.nav}>
                <Typography variant="h6" className={classes.navItem}>
                  Company
                </Typography>
                <Typography variant="h6" className={classes.navItem}>
                  Find Candidate
                </Typography>
                <Typography variant="h6" className={classes.navItem}
                 style={{borderRight:'5px solid #666666'}}
                >
                  Guide
                </Typography>
            
            </Toolbar>
          </AppBar>   
        </div>
    );
};

export default Nav;