import React from 'react';

function Nav(props) {
    console.log(props.buttons.complete);

    function handleClick (e) {
        console.log(e.target)
        props.clickHandle(3)
    }
    

    return (
        <div className="col">
            <button onClick={handleClick} key="current" className="btn btn-secondary btn-sm">{props.button.current} </button>
            <button onClick={handleClick} key="complete" className="btn btn-secondary btn-sm">{props.button.complete} </button>
        </div>
    )
}

export default Nav;