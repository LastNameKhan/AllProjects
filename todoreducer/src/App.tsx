import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TaskContextProvider from "./Contexts/TaskContext";
import TodoList from "./Components/TodoList";
import { Container } from "@mui/system";

function App() {
  return (
    <Container>
      <TaskContextProvider>
        <Navbar></Navbar>
        <TodoList></TodoList>
      </TaskContextProvider>
    </Container>
  );
}

export default App;
