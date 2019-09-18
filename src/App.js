import React from 'react';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import LayoutCont from './containers/layoutCont/LayoutCont'
import './App.css';
import MapCont from './containers/mapCont/MapCont';

function App() {
  return (    
      <LayoutCont>
          <MapCont/>
      </LayoutCont>   
  );
}

export default App;
