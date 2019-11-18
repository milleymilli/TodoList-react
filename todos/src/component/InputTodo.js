import React, { Component } from "react";

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
            <div style={{ paddingBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Add items,,,"
                    onChange={this.onChange}
                />
                <input
                    type="button"
                    value="Add"
                    onClick={() => this.props.addItems(this.state.title)}
                />
            </div>
        );
    }
}
export default InputTodo;
