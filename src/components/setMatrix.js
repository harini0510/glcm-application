import Button from 'react-bootstrap/Button';
var SetMatrix = params=>{
    return(
        <div>
            <h2>Create a matrix</h2>
            <div className="row">
                <div className="col-md-4 m-2 p-2">
                    <label htmlFor="rows">Rows:&nbsp;</label>
                    <input type="text" id="rows" onChange={params.changerows}/>
                </div>
                <div className="col-md-4 m-2 p-2">
                    <label for="col">Columns:&nbsp;</label>
                    <input type="text" id="cols" onChange={params.changecols}/>
                </div>
                <div className="col-md-2 m-2 p-2">
                    <Button onClick={()=> params.Create()}>Genetate Matrix</Button>
                </div>
            </div>
        </div>
    )
}

export default SetMatrix;