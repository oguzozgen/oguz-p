import React from 'react'
import PropTypes, { func } from 'prop-types'
import { height } from '@material-ui/system';
import MapComp from '../../components/mapComp/MapComp'

function MapCont(props){
    return(
        <div style={{height:'80vh'}}>
           <MapComp>
               {props.children}
           </MapComp>
        </div>
    );
}
MapCont.propTypes={};
export default MapCont;