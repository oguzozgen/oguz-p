import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import HeaderComp from '../../components/layout/headerComp/HeaderComp'
import FooterComp from '../../components/layout/footerComp/FooterComp'
import ContentComp from '../../components/layout/contentComp/ContentComp'

const useStyles = makeStyles(theme => ({
    container:{
      minHeight:"100vh",
    }
  }));
  
function LayoutCont(props){
    const classes=useStyles();
    return(
        <>
           
            <ContentComp>                    
                    {props.children}
            </ContentComp>
        </>
    );
}
LayoutCont.propTypes={};
export default LayoutCont;
