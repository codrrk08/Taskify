import React from "react";

import "./App.css";
import Header from "./components/Header";
import { useState} from "react";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

// let name: string;
// name = "risshi";

// let age: number | string;   //union i.e both type of values allowed
// let hobbies: string[];
// hobbies = ["hello","world"];   //array

// let role:[number,string];   //tuple
// role = [5,"risshi"];

// // function printName(name:string){
// //   console.log(name);

// // }
// // printName("Risshi");

// let printName: Function;  //not recommended
// let someFunc:(name:string,age:number)=>void; //void returns undefined whereas never returns nothing
// let personName: unknown; //recommended instead of any

// // type Person = {   //object or an Alias
// //   name:string;
// //   age?:number;    //optional property

// // }
// // let person : Person = {    //another object assigned to an existing object
// //   name:"risshi",
// //   age: 20,

// // }
// // let lotsOfPeople: Person[];   //array of objects

// interface Person{
//   name:string,
//   age?:number,
// }
// interface person extends Person{
//   place:string,
//   class:number,
// }

// type X = Person & {   //interface can also include a type using extends
//   a:string,
//   b:number,
// }

// type Y = X & {  //includes properties of type X
//   c:string,
//   d:number,
// }

const App: React.FC = () => {
  //functional component
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); //array of type or interface
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
 

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  // console.log(todo);

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Header todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </DragDropContext>
    </>
  );
};

export default App;
