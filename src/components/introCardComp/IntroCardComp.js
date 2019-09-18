import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import RoomIcon from '@material-ui/icons/Room'
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
                    <CardActions>
                        <Button size="small" color="primary">
                            Story
                        </Button>
                        <Button size="small" color="primary">
                            Skill Set
                        </Button>
                    </CardActions>
                </Card>    
    );
}
IntroCardComp.propTypes={};
export default IntroCardComp;