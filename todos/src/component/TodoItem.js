import React from "react";

export default function TodoItem(props) {
    const { id, title } = props.myItem;
    return (
        <div>
            <input
                type="checkbox"
                onChange={props.toggleComplete.bind(this, id)}
                style={{ backgroundColor: "gray" }}
            />{" "}
            {title}{" "}
            <button
                style={{ backgroundColor: "#FF0000" }}
                onClick={props.deletItem.bind(this, id)}
            >
                X
      </button>
        </div>
    );
}
