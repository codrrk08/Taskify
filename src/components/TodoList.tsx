import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    // <div className="bg-blue flex flex-col flex-wrap h-full">
    //   {/* mapping the todos entered */}
    //   {todos.map((todo) => (
    //     <SingleTodo
    //       todo={todo}
    //       key={todo.id}
    //       todos={todos}
    //       setTodos={setTodos}
    //     />
    //   ))}
    // </div>
    <div className="dark:bg-black bg-whitesmoke flex justify-center gap-2 items-start h-screen">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col items-center rounded-lg p-3 w-1/3 bg-virgin dark:bg-midnight bg-cover"
          >
            <span className="font-playpen font-extrabold text-xl text-black dark:text-slate-300 p-3">
              Daily Chores
            </span>
            {todos?.map((todo,index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col items-center rounded-lg p-3 w-1/3 bg-virgin dark:bg-midnight bg-cover"
          >
            <span className="font-playpen font-extrabold text-xl text-black dark:text-slate-300 p-3">
              Important Tasks
            </span>
            {completedTodos?.map((todo,index) => (
              <SingleTodo
                todo={todo}
                index={index}
                key={todo.id}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
