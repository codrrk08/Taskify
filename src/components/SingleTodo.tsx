import React, { useRef } from "react";
import { Todo } from "./model";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  // when the updated todo is entered and submitted
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault(); //value set to ediTodo
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    //if the todo is clicked done, it's isDone property is toggled
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };


 

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="flex border-none w-full rounded-lg p-5 mt-4 transition duration-200 dark:bg-black text-black dark:text-white bg-thulianpink/70"
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              className="pl-2 mr-2 flex-1 w-2/3  focus:shadow focus:shadow-sm focus:dark:shadow-slate-300 focus:shadow-black rounded-3xl h-9 dark:bg-khaki/50 bg-grayfrench/70 focus:outline-none text-md text-white font-playpen"
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : todo.isDone ? (
            <s className="flex-auto font-playpen text-lg font-semibold max-sm:text-xs max-sm:text-wrap max-sm:text-clip overflow-hidden">
              {todo.todo}
            </s>
          ) : (
            <span className="flex-auto font-playpen lg:text-lg font-semibold max-sm:text-xs max-sm:text-wrap max-sm:text-clip overflow-hidden transition duration-500">
              {todo.todo}
            </span>
          )}

          {/* if the isDone property is true show the todo else strike it off */}
          <div className="flex gap-1 text-white items-center cursor-pointer max-sm:text-xs ">
            {/* edit button */}
            <span
              className="transition hover:text-black dark:hover:text-slate-500 hover:scale-125 hover:duration-500"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <MdEdit />
            </span>

            {/* delete button */}
            <span
              className="transition hover:text-black dark:hover:text-slate-500 hover:scale-125 duration-500"
              onClick={() => handleDelete(todo.id)}
            >
              <MdDelete />
            </span>

            {/* done button */}
            <span
              className="transition hover:text-black dark:hover:text-slate-500 hover:scale-125 duration-500"
              onClick={() => handleDone(todo.id)}
            >
              <MdOutlineDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
