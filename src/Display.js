import React from 'react';

function Display(props) {

    let itemList = JSON.parse(localStorage.getItem('list'));
    //if no data set to empty string
    if (!itemList) { itemList = [] };



    //create list sorted by status
    let sortedList = [];

    sortedList = itemList.filter(item => props.sortStatus === 'all' || item.status === props.sortStatus);


    //Moves completed task to the completed tab
    const completeTask = (e) => {
        let index = itemList.findIndex(x => x.id === parseInt(e.target.dataset.id));
        itemList[index].status = 'complete';
        localStorage.setItem('list', JSON.stringify(itemList));
    }
    //Delete doesn't work yet
    const deleteTask = (e) => {
        let store = JSON.parse(localStorage.getItem("itemsArray")) || [];
        for (let i = 0; i < store.length; i++) {
            store.splice(i, 1);
            localStorage.setItem('itemsArray', JSON.stringify(store));
        }
    }

    return (
        <div className="row text-center">
            <div className="row">
                    {sortedList.map((item, index) =>
                        <li key={index}>
                            {item.task}
                            ({item.status})
                            <button onClick={completeTask} data-id={item.id} type="button" className="btn btn-outline-success">Done</button>
                            <button onClick={deleteTask} data-id={item.id} type="button" className="btn btn-outline-danger">Del</button>
                            </li>)}
                <p>You have {sortedList.length} task in the "{props.sortStatus}" list!</p>
            </div>
        </div>
    )
}

export default Display;
