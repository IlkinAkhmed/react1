// import logo from './logo.svg';
// import  './App.css';

import InputBox from "./Components/InputBox";
import ToDoItems from "./Components/ToDoItems";

function App() {
  return (
    <>
      <div className="container">
        <InputBox/>
        <div className="todobox">
        <ToDoItems/>
        <ToDoItems/>
        <ToDoItems/>
        <ToDoItems/>
        <ToDoItems/>
        </div>
      </div>
    </>
    
  );
}

export default App;
