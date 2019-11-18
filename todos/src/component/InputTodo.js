import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';


class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
    }
    onChange = e => {
        this.setState({
            title: e.target.value
        });
    };
    render() {
        return (

            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={this.onChange} placeholder="Add items,,," aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-success" type="button"
                        onClick={() => this.props.addItems(this.state.title)} id="button-addon2">Add</button>
                </div>


            </div>

        );
    }
}
export default InputTodo;
