import React from 'react';

function Display(props) {
    console.log(props.sortStatus);
    let listItem = [
        ['Do dishes', 'Todo'],
        ['Mow lawn', 'Todo'],
        ['Vacuum', 'Done']
    ]

    return (
        <ul>
            {listItem.map(item => <li key={item[0]} >{item[1]} - {item[0]} </li>)}
        </ul>
    )
}

export default Display;