import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    headerTypo:{
        textAlign:'center'
    },
    textTypo:{
        textAlign:'center'
    }
  });
function CardTestComp(){
    const classes = useStyles();
    return( 
         <Card className={classes.card}>
                <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.headerTypo}>
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.textTypo}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
        </Card>
      );
}
CardTestComp.propTypes={};
export default CardTestComp;