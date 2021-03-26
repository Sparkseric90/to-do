import React from 'react';

class InputTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: 'New task'
        };
    }

    handleChange = (e) => this.setState({ newTask: e.target.value });

    handleSubmit = (e) => e.preventDefault();

    render() {
        return (
            <div className="row">
                <div className="col-12 border text-center">
                    <form onSubmit={this.handleSubmit}>
                        <label>Name:<input type="text" name="name" /></label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default InputTask;
