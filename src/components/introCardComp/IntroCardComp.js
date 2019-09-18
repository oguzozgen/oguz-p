import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import RoomIcon from '@material-ui/icons/Room'
import {Linkedin,Github,Twitter } from 'grommet-icons';

import './IntroCardComp.css'

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      borderRadius:9
    },
    headerTypo: {
      textAlign:'center'
    },
    textTypo:{
      textAlign:'center'
    },
    cardAction:{
        justifyContent:'center'
    },
    buttonHover:{
        '&:hover': {
            color:'#cacaca'
        }
    }
});
function IntroCardComp(){
    const classes = useStyles();
    return(
                 <Card className={classes.card}>                    
                    <CardContent>
                        <Typography className={classes.headerTypo} gutterBottom variant="h5" component="h2">
                            <RoomIcon/> 
                        </Typography>
                        <Typography className={classes.textTypo} variant="body2" color="textSecondary" component="p">
                            Hey <br/> Oğuz Özgen is here<br/> I work as a independent developer<br/> 
                        </Typography>
                    </CardContent>                    
                    <CardActions className={classes.cardAction}>                    
                    <Button variant="outlined" size="small" style={{filter:'brightness(1.2)'}}>
                        <Link to="/skillset" >Skill Set</Link>  
                    </Button>
                    </CardActions>
                    <Divider /> 
                    <CardActions className={classes.cardAction}>
                         <Button>
                              <a target="_blank" href="https://www.linkedin.com/in/oguzozgen">
                                 <Linkedin/>
                                </a>
                        </Button>   
                        <Button>                       
                            <a target="_blank" href="https://github.com/oguzozgen">
                                <Github/>    
                            </a>
                        </Button>
                        <Button>                        
                            <a target="_blank" href="https://twitter.com/oguzozgenn">
                                <Twitter/>
                            </a>
                        </Button> 
                    </CardActions>
                </Card>    
    );
}
IntroCardComp.propTypes={};
export default IntroCardComp;