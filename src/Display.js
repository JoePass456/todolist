import React from 'react';

function Display(props) {

    let itemList = JSON.parse(localStorage.getItem('list'));
    //if no data set to empty string
    if (!itemList) { itemList = [] };

    //create list sorted by status
    let sortedList = [];
    for (let i = 0; i < itemList.length; i++) {
        if (props.sortStatus !== 'all') {
            if (itemList[i].status === props.sortStatus) {
                sortedList.push(itemList[i]);
            }
        } else {
            sortedList.push(itemList[i]);
        }
    }

    const completeTask = (e) => {
        let index = itemList.findIndex(x => x.id === parseInt(e.target.dataset.id));
        itemList[index].status = 'complete';
        localStorage.setItem('list', JSON.stringify(itemList));
    }

    const deleteTask = (e) => {
        let index = itemList.findIndex(x => x.id === parseInt(e.target.dataset.id));
        itemList[index].status = 'deleted';
        localStorage.setItem('list', JSON.stringify(itemList));
    }

    return (
        <div className="rowtext-center">
            <div className="col">
                <ol>
                    {sortedList.map((item, index) =>
                        <li key={index}>
                            <button onClick={completeTask} data-id={item.id} type="button" className="btn btn-success btn-sm">Done</button>
                            <span>
                                {item.task} ({item.status})
                            </span>
                            <button onClick={deleteTask} data-id={item.id} type="button" className="btn btn-danger btn-sm">Del</button>

                        </li>)}
                </ol>
                        <p>You have {sortedList.length} tasks in the "{props.sortStatus}" list!</p>
            </div>
        </div>
    )
}

export default Display;