import React from "react";

export default function TodoItem(props) {
    var style = { width: "100%", margin: "50px" };


    const { id, title } = props.myItem;
    return (
        <div style={style} className="main" >
            <input
                type="checkbox"
                onChange={props.toggleComplete.bind(this, id)}
                style={{ backgroundColor: "gray" }}
            />{" "}
            {title} {" "}

            <button type="button" className="btn btn-danger" onClick={props.deletItem.bind(this, id)} > Delete</button>
            <br />
        </div >
    );
}
