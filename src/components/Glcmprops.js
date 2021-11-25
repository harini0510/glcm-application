import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-dropdown-select';

const actions = [
  { label: 0, value: 1 },
  { label: 45, value: 2 },
  { label: 90, value: 3 },
  { label: 135, value: 4 }
];



var Glcmprops=params=>{
  var changeDegree=(value)=>{
    params.setDegree(value);
  }
  
  let distance_actions=[];
  if(params.degree_val===0){
    for(var i=2;i<=params.cols;i++){
      distance_actions.push({label:i,value:i-1});
    }
  }
  else if(params.degree_val===90){
    for(var i=2;i<=params.rows;i++){
      distance_actions.push({label:i,value:i-1});
    }
  }
  if(params.degree_val===45||params.degree_val===135){
    if(params.rows>params.cols)
      for(var i=2;i<=params.cols;i++){
        distance_actions.push({label:i,value:i-1});
      }
    else
      for(var i=2;i<=params.rows;i++){
        distance_actions.push({label:i,value:i-1});
      }
  }
    let toret=[]
    var upto=params.degree===0?params.cols:
            params.degree===90?params.rows:
            params.cols>params.rows?params.rows:params.cols
    for(var i=2;i<=upto;i++)
        toret[i]=i;
    console.log(params.distance_val)
    //console.log(toret)
    return(
       <div className="row"> 
            <div className="col-md-5" style={{"margin":"20px","padding":"20px"}}>
              <Select options={actions} onChange={(values) => {console.log(values[0].label); return(changeDegree(values[0].label))}} />
            </div>
            <div className="col-md-5" style={{"margin":"20px","padding":"20px"}}>
              <Select options={distance_actions} onChange={(values) => params.setDistance(values[0].label)} />
            </div>
        </div>
    )
}

export default Glcmprops;