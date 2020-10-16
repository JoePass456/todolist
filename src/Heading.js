import React from 'react';

function Heading(props) {
    return(
        <div className="col-12 border text-center">
            <h1>{props.title}</h1>  
        </div>
    )
}

export default Heading;