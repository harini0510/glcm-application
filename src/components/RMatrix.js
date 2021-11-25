var RandomMatrix = (params) =>{
  return(
      <div>
          <table style={{"margin":"20px", "padding":"20px"}}>
              <tbody>
              <tr key="column_number">
                      {
                          params.Matrix[0].map((item,index)=>
                              <td key={index} style={{'padding':'10px','margin':'0px'}}>{index+1}</td>
                          )
                      }
                  </tr>
                  {params.Matrix.map((item,index)=>(
                      <tr key={index}>
                          {item.map((innerItem,innerIndex)=>(
                              <td key={innerIndex} style={{"borderBlockColor":"#000000", "borderWidth":"2px", "borderStyle":"solid", "padding":"4px"}}>{innerItem}</td>
                          ))}
                          <td key="row_number" style={{'padding':'10px','margin':'0px'}}>{index+1}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  )
}

export default RandomMatrix;