import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toogleComplete } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteToogle = () => {
    dispatch(toogleComplete({ id, completed: !completed }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCompleteToogle}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={handleDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
