import './App.css';

import { useState, useEffect} from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000"; // como será acessado nossa api

function App() {
  // States da aplicação
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]); // lista vazia para inserção de todos
  const [loading, setLoading] = useState(false) // forma de carregar os dados e exibir para o usuário

  // Load todos on page load
  useEffect(() => {

    // função anônima (retorna dados num array de objetos)
    const loadData = async() => {

      setLoading(true); // estará carregando dados... 

      // variável que vai guardar os dados vindo do fetch
      const res = await fetch(API + "/todos")
        .then((res) => res.json())
        .then((data) => data) // utiliza o fecth api e trazer o dado que a gente quer (em uma aaray de objetos)
        .catch((err) => console.log(err));

      setLoading(false);

      setTodos(res);

    };

    loadData();

  }, []); // array de dependências como segundo argumento

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    // Configurando a requizição
    await fetch(API + "/todos", {
      method: "POST", // inserindo dados
      body: JSON.stringify(todo), // onde irão os dados (será string)
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => [...prevState, todo]);
    // envio da tarefa para api
    //console.log(todo);
    setTitle("")
    setTime("")
  };

  const handleDelete = async (id) => {
    // Configurando a requizição
    await fetch(API + "/todos/" + id, {
      method: "DELETE"
    });

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleEdit = async(todo) => {

    todo.done = !todo.done;

    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => 
    prevState.map((t) => (t.id === data.id ? (t = data) : t)))
  };

  if(loading) {
    return <p>Carregando...</p>
  };

  return (
    <div className="App">

      <div className='todo-header' todo="true">
        <h1>React Todo</h1>
      </div>

      <div className='form-todo' todo="true">
        <h2>Insira a sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control' todo="true">
            <label htmlFor='title'>O que você vai fazer?</label>
            <input 
              type="text" 
              name="title" 
              placeholder="Título da tarefa" 
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
          </div>

          <div className='form-control' todo="true">
            <label htmlFor='time'>Duração:</label>
            <input 
              type="text" 
              name="time" 
              placeholder="Tempo estimado (em hora)" 
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            />
          </div>
          <input type="submit" value="Criar Tarefa" />
        </form>
      </div>

      <div className='list-todo'>
        <h2>Lista de tarefas:</h2>
        {todos.length === 0 && <p>Não há tarefas!</p>}
        {todos.map(( todo ) => (
          <div className='todo' key={todo.id} todo="true">
            <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
            <p>Duração: {todo.time}</p>
            <div className='action'>
              <span onClick={() => handleEdit(todo)}>
                {!todo.done ? <BsBookmarkCheck/> : <BsBookmarkCheckFill/>}
              </span>
              <BsTrash onClick={() => handleDelete(todo.id)}/>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
