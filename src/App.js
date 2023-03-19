import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    const [data, setData] = useState([]);


    return <div className="App">
    <div className="container">
        <h1 className="title">Daily To Do List</h1>
        <Form setData={setData}/>
        <TodoList data={data}/>
    </div>
    </div>;
}

export default App;
