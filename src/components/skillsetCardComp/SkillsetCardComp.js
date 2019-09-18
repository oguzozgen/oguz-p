import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import RoomIcon from '@material-ui/icons/Room'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import './SkillsetCardComp.css'


const useStyles = makeStyles(theme => ({
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
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
}));
function SkillsetCardComp(){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    let data=[
        {
            "n":1,
            "name":"Architecture",
            "role":"",
            "abilities":[
                "Microservices",
                "DDD",
                "Clean Code",
                "SOLID - OOP",
                "Web Development"
            ]
        },
        {
            "n":2,
            "name":"JS",
            "role":"Front End",
            "abilities":[
                "React Hooks",
                "ES5 - OOP",
                "Data Visualization"
            ]
        },
        {
            "n":3,
            "name":".NET",
            "role":"Full Stack",
            "abilities":[
                "4+ Framework",
                "Core 2",
                "Azure"
            ]
        },
        {
            "n":4,
            "name":"GIS",
            "role":"Full Stack",
            "abilities":[
                "Leaflet",
                "Client-side Calculation",
                "PostgreGIS",
                "GeoServer",
                "QGIS"
            ]
        }
    ];
    return(       
        <Card className={classes.card}>                    
                <CardContent>
                <Typography className={classes.headerTypo} gutterBottom variant="h5" component="h2">
                    <RoomIcon/> 
                </Typography>
                <div className={classes.root}>
                 { 
                   data.map((item,i)=>
                    {
                        return(
                                <ExpansionPanel key={item.n} expanded={expanded === ('panel'+item.n)} onChange={handleChange(('panel'+item.n))}>
                                    <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={"panel"+item.n+"bh-content"}
                                    id={"panel"+item.n+"bh-header"}
                                    >
                                    <Typography className={classes.heading}>
                                        {item.name}
                                    </Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        {item.role}
                                    </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <ul>
                                            {
                                                item.abilities.map((ability,k)=>{
                                                    return(
                                                        <li><Typography key={k} variant="h8">{ability}</Typography></li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                        );
                    })
                  }
                    </div>
                </CardContent>                    
            <CardActions style={{justifyContent:'center'}}>
                <Button size="small">
                    <ChevronLeftIcon fontSize="large"/>
                </Button>
            </CardActions>
        </Card>   
    );
}
SkillsetCardComp.propTypes={};
export default SkillsetCardComp;
