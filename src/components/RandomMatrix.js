var MakeRandomMatrix=(x,y)=>{
  var generatedArray = []
  for(var i=0;i<x;i++){
    var innerArray = []
    for(var j=0;j<y;j++){
      innerArray.push(Math.floor(Math.random() * 8) + 1);
    }
    generatedArray.push(innerArray)
  }
  return generatedArray
};

export default MakeRandomMatrix;