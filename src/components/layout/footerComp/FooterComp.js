import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    appBar:{
        backgroundColor:'white'
    },
    toolbar:{
        display:'flex',         
        justifyContent:'center', 
        color:'inherit'
    },
  }));

function FooterComp(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <AppBar position="static" className={classes.toolbar} direction='row' >
            <Toolbar className={classes.appBar}>
                <Typography variant="h4" >
                       FOOTER
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
    );
}
FooterComp.propTypes={};
export default FooterComp;
