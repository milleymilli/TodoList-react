import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
const ToDo = props => {
    return props.todos.map(item => (
        <TodoItem
            key={item.id}
            myItem={item}
            toggleComplete={props.toggleComplete}
            deletItem={props.deletItem}
        />
    ));
};
// we can not pass state through components

ToDo.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default ToDo;
//
//
//
//
// import React from "react";

// export default function TodoItem(props) {
//   const { id, title } = props.myItem;
//   return (
//     <div>
//       <input
//         type="checkbox"
//         onChange={props.toggleComplete.bind(this, id)}
//         style={{ backgroundColor: "gray" }}
//       />{" "}
//       {title}{" "}
//       <button
//         style={{ backgroundColor: "#FF0000" }}
//         onClick={props.deletItem.bind(this, id)}
//       >
//         X
//       </button>
//     </div>
//   );
// }
// //
// //
// //
// import React, { Component } from "react";

// class InputTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: ""
//     };
//   }
//   onChange = e => {
//     this.setState({
//       title: e.target.value
//     });
//   };
//   render() {
//     return (
//       <div style={{ paddingBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Add items,,,"
//           value={this.state.title}
//           onChange={this.onChange}
//         />
//         <input type="button" value="Add" onClick={this.props.addItems} />
//       </div>
//     );
//   }
// }
// export default InputTodo;
