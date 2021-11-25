import { useState } from "react";

var GlcmMatrix=(params)=>{
    var [GlcmArray,setGlcmArray]=useState( [ 
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ]);
    var [forceUpdate,setForceUpdate]=useState(0);
    var assign0=()=>{
        GlcmMatrix= [ 
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ]
    }
   

    var Colour=(index,innerIndex)=>{
        let newColourMatrix=params.GlcmColour;
        const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hex = '#';
        for(let i = 0; i < 6; i++){
            const index = Math.floor(Math.random() * hexValues.length)
            hex += hexValues[index];
        }
        
        setForceUpdate(forceUpdate===hex?"":hex);
        newColourMatrix[index][innerIndex]=newColourMatrix[index][innerIndex]==="#FFFFFF"?hex:"#FFFFFF";
        params.setGlcmColour(newColourMatrix);
    }

    var assign=(matrix)=>{
        var i,j,col,row;
        if(params)
            if(params.degree_val===0){
                for(i=0;i<params.Matrix.length;i++)
                    for(j=0;j<params.Matrix[i].length-params.distance_val+1;j++){
                        col=params.Matrix[i][j];
                        row=params.Matrix[i][j+params.distance_val-1];
                        if(row!==undefined)
                            matrix[row-1][col-1]+=1;
                    }
            }
            else if(params.degree_val===90)
                for(var i=0;i<params.Matrix.length-params.distance_val+1;i++){
                    for(var j=0;j<params.Matrix[i].length;j++){
                        var col=params.Matrix[i][j];
                        var row=params.Matrix[i+params.distance_val-1][j];
                        if(row!==undefined)
                            matrix[row-1][col-1]+=1;
                    }
                }
            else if(params.degree_val===45){
                for(i=params.distance_val-1;i<params.Matrix.length;i++)
                    for(j=0;j<params.Matrix[i].length-params.distance_val+1;j++){
                        col=params.Matrix[i-params.distance_val+1][j+params.distance_val-1];
                        row=params.Matrix[i][j];
                        if(col!==undefined)
                            matrix[row-1][col-1]+=1;
                    }
            }
            else if(params.degree_val===135){
                for(i=0;i<params.Matrix.length-params.distance_val+1;i++)
                    for(j=0;j<params.Matrix[i].length-params.distance_val+1;j++){
                        col=params.Matrix[i][j];
                        row=params.Matrix[i+params.distance_val-1][j+params.distance_val-1];
                        if(col!==undefined)
                            matrix[row-1][col-1]+=1;
                    }
            }
    }
    assign0();
    assign(GlcmMatrix);
    
    var initColour=[]
    for(var ii=0;ii<params.Matrix.length;ii++){
        let innerInputColour=[]
        for(var jj=0;jj<params.Matrix[ii].length;jj++){
            innerInputColour.push("#FFFFFF");
        }
        initColour.push(innerInputColour);
    }
    var [inputColour, setInputColour]=useState(initColour)
    var findColoured=()=>{
        var w,q;
        for(var i=0;i<8;i++){
            for(var j=0;j<8;j++){
                if(params.GlcmColour[i][j]!=="#FFFFFF"){
                    if(params.degree_val===0){
                        for(q=0;q<params.Matrix.length;q++){
                            for(w=0;w<params.Matrix[q].length-params.distance_val+1;w++){
                                if(params.Matrix[q][w]===j+1&&params.Matrix[q][w+params.distance_val-1]===i+1){
                                    inputColour[q][w]=params.GlcmColour[i][j];
                                    inputColour[q][w+params.distance_val-1]=params.GlcmColour[i][j];                                    
                                }
                            }
                        }
                    }
                    else if(params.degree_val===90){
                        for(q=0;q<params.Matrix.length-params.distance_val+1;q++){
                            for(w=0;w<params.Matrix[q].length;w++){
                                if(params.Matrix[q][w]===j+1&&params.Matrix[q+params.distance_val-1][w]===i+1){
                                    inputColour[q][w]=params.GlcmColour[i][j];
                                    inputColour[q+params.distance_val-1][w]=params.GlcmColour[i][j];                                    
                                }
                            }
                        }
                    }
                    else if(params.degree_val===45){
                        for(q=params.distance_val-1;q<params.Matrix.length;q++){
                            for(w=0;w<params.Matrix[q].length-params.distance_val+1;w++){
                                if(params.Matrix[q][w]===i+1&&params.Matrix[q-params.distance_val+1][w+params.distance_val-1]===j+1){
                                    inputColour[q][w]=params.GlcmColour[i][j];
                                    inputColour[q-params.distance_val+1][w+params.distance_val-1]=params.GlcmColour[i][j];                                    
                                }
                            }
                        }
                    }
                    else if(params.degree_val===135){
                        for(q=0;q<params.Matrix.length-params.distance_val+1;q++){
                            for(w=0;w<params.Matrix[q].length-params.distance_val+1;w++){
                                if(params.Matrix[q][w]===j+1&&params.Matrix[q+params.distance_val-1][w+params.distance_val-1]===i+1){
                                    inputColour[q][w]=params.GlcmColour[i][j];
                                    inputColour[q+params.distance_val-1][w+params.distance_val-1]=params.GlcmColour[i][j];                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    findColoured()

    var assign0ToInputColour=(array)=>{
        for(var ii=0;ii<array.length;ii++){
            let innerColourGlcm=[]
            for(var jj=0;jj<array[ii].length;jj++)
                innerColourGlcm.push(`#FFFFFF`)
            array[ii]=innerColourGlcm;
        }
        setInputColour(array);
    }

    var assign0ToOutputColour=()=>{
        let arr=params.GlcmColour;
        for(var i=0;i<arr.length;i++)
            for(var j=0;j<arr[i].length;j++)
                arr[i][j]="#FFFFFF"
        params.setGlcmColour(arr);
    }

    var clearColour=()=>{
        assign0ToOutputColour();
        assign0ToInputColour(inputColour);
        setForceUpdate(forceUpdate+"_")

    }

    return(
        <div id="input">
            <div>
                <div>
                    <button onClick={clearColour} className="btn btn-success align-self-start">Clear Colours</button>
                </div>
            <table style={{'margin':'20px'}}>
                <tbody>
                    {params.Matrix.map((item,index)=>{
                        return(
                            <tr key={index}>
                                {item.map((innerItem,innerIndex)=>{
                                    if (inputColour[index]===undefined){
                                        let inner = []
                                        for (var qq=0; qq<innerItem.length;qq++)
                                            inner.push("#FFFFFF")
                                        inputColour.push(inner)
                                    }
                                    var string=index+"_"+innerIndex
                                    return(
                                        <td key={string} 
                                            bgcolor={inputColour[index][innerIndex]}
                                            style={{"borderWidth":"2px", 'borderColor':"#000000", 'borderStyle':'solid','padding':'10px','margin':'0px'}}
                                        >
                                            {innerItem}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
            <div>
                <table style={{'margin':'20px'}}>
                    <tbody>
                        <tr key="column_number">
                            {
                                GlcmMatrix[0].map((item,index)=>
                                    <td key={index} style={{'padding':'10px','margin':'0px'}}>{index+1}</td>
                                )
                            }
                        </tr>
                        {GlcmMatrix.map((item,index)=>{
                            return( 
                                <tr key={index}>
                                    {item.map((innerItem,innerIndex)=>{
                                        var string=index+"_"+innerIndex
                                        return(
                                            <td key={string} 
                                                style={{"borderWidth":"2px", 'borderColor':"#000000", 'borderStyle':'solid','padding':'10px','margin':'0px'}}
                                                bgcolor={params.GlcmColour[index][innerIndex]}
                                                onClick={()=>Colour(index,innerIndex)}
                                            >
                                                {innerItem}
                                            </td>
                                        )
                                    })}
                                    <td key="row_number" style={{'padding':'10px','margin':'0px'}}>{index+1}</td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>    )
}

export default GlcmMatrix;