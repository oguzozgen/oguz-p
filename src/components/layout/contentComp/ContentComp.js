import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({
    container:{
      minHeight:"100vh",
      flexGrow:1,
    },
    grid:{
        display:'flex',
        direction:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'17.5%'
    }
}));


function ContentComp(props){
    const classes=useStyles();
    return(
        <>
         {props.children}
        </>
    );
}
ContentComp.propTypes={};
export default ContentComp;

/**
 
        <Container className={classes.container}>
            <Grid  
            className={classes.grid}
            >
                {props.children}    
            </Grid>           
        </Container>
 */