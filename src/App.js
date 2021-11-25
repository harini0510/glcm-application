import logo from './logo.svg';
import './App.css';

import GlcmMatrix from './components/GlcmMatrix';
import React, {useState} from 'react';
import SetMatrix from './components/setMatrix';
import Glcmprops from './components/Glcmprops';

function App() {
  var [rows, setRows]=useState(6)
  var [cols, setCols]=useState(7)

  var [degree_val, setDegree] = useState(1)
  var [distance_val, setDistance] = useState(2)
  
  let BgColour=[]
  for(var ii=0;ii<8;ii++){
      let innerColour=[]
      for(var jj=0;jj<8;jj++)
          innerColour.push(`#FFFFFF`)
      BgColour.push(innerColour);
  }
  var [GlcmColour,setGlcmColour]=useState(BgColour);
    
  
  var Matrix=()=>{
    var MatrixArr = []
    for (var i=0; i<rows; i++){
      var Array=[]
      for (var j=0; j<cols; j++)
        Array.push(Math.floor(Math.random() * 8) + 1); 
      MatrixArr.push(Array)
    }
        return MatrixArr;
             
  }
  var [Random,setRandom]=useState(Matrix())
  var Create=()=>{
    setRandom(Matrix())
  }
  var changecols=(event)=>{
    setCols(event.target.value===undefined?3:event.target.value<3?3:event.target.value)
  }
  
  var changerows=(event)=>{
    setRows(event.target.value===undefined?3:event.target.value<3?3:event.target.value)
  }
  return (
    <div className="App">
      <SetMatrix Create={Create} rows={rows} cols={cols} changerows={changerows} changecols={changecols}/>
      <Glcmprops degree_val={degree_val} setDegree={setDegree} distance_val={distance_val} setDistance={setDistance} rows={rows} cols={cols}/> 
      <GlcmMatrix Matrix={Random} degree_val={degree_val} distance_val={distance_val} GlcmColour={GlcmColour} setGlcmColour={setGlcmColour}/>
    </div>
  );
}

export default App;