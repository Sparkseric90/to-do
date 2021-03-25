import React from 'react';

function Display(props) {

    let itemList = JSON.parse(localStorage.getItem('list'));
    //if no data set to empty string
    if (!itemList) { itemList = [] };



    //create list sorted by status
    let sortedList = [];

    sortedList = itemList.filter(item => props.sortStatus === 'all' || item.status === props.sortStatus);



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
        <div className="row text-center">
            <div className="col">
                <ol>
                    {sortedList.map((item, index) =>
                        <li key={index}>
                            {item.task}
                            ({item.status})
                            <button onClick={completeTask} data-id={item.id} type="button" className="btn btn-success btn-sm">Done</button>
                            <button onClick={deleteTask} data-id={item.id} type="button" className="btn btn-danger btn-sm">Del</button>
                            
                        </li>)}
                </ol>
                <p>You have {sortedList.length} task in the "{props.sortStatus}" list!</p>
            </div>
        </div>
    )
}

export default Display;
