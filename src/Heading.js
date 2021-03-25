
import React from 'react';

function Heading(props) {
    return (
        <div className="row">
            <div className="col-12 border text-center">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default Heading;