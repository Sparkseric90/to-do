import React from 'react';

function Todo(props) {


    return (

        <div className="input-group mb-3 text-center mt-4">
            <button className="btn btn-outline-secondary" type="button" onClick={() => props.handleComplete(props.chore.id)} id="button-addon1">Complete</button>
            <input type="text" readOnly value={props.chore.taskText} className={props.chore.completed ? "text-decoration-line-through form-control" : "form-control"} aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" onClick={() => props.handleRemove(props.chore.id)} id="button-addon2">X</button>
        </div>
    )
}
export default Todo;