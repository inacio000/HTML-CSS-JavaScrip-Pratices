import React, { useState } from "react";

import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
      {
        id: '1',
        tittle: 'Study programmation',
        complite: false
      },
      {
        id: '2',
        tittle: 'Read book',
        complite: true
      },
      {
        id: '2',
        tittle: 'Read book',
        complite: true
      }
  ]); // state

  return (
      <>
          <div className="container">
              <Tasks tasks={tasks} />
          </div>;
      </>
  );
};

export default App;