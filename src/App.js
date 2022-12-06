import './App.css';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar } from './Components/Navbar/Navbar';
import { LoginButton } from './Components/Login/Login';
import { LogoutButton } from './Components/Logout/Logout';
import { Profile } from './Components/Profile/Profile';
import { ToDo } from './Components/To-do/To-do';
// import { v4 as uuidv4 } from 'uuid';
import Tarea from './Components/Tarea/Tarea';

function App() {

  const [tarea, setTarea] = useState("");
  const [list, setList] = useState([]);
  const { isAuthenticated } = useAuth0();

  const [contador, setContador] = useState(0);

  const llave = () => setContador(contador + 1);

  const handleSubmit = (e) => {
    e.preventDefault()
    llave();

    if (tarea === "") {
      alert("Debes colocar una tarea.")
      return
    }

    const nuevaTarea =
    {
      id: contador,
      tarea: tarea,
      completado: false,
    }

    const temp = [nuevaTarea, ...list]
    setList(temp);
    setTarea("")

    console.log(temp)
  }

  const handleChange = (e) => {
    setTarea(e.target.value)
  }

  const handleUpdate = (obj) => {

    const { id, tarea } = obj
    const arr = [...list]
    const buscador = arr.find(el => el.id === id)
    buscador.tarea = tarea
    console.log(id);

    setList(arr)
  }

  // const setLocalStorage = () => {
  //   localStorage.setItem('tarea', tarea)
  //   localStorage.setItem('list', JSON.stringify(list))
  //   localStorage.setItem('contador', contador)
  // }

  const onDelete = (id) => {

    const arr = list.filter(el => el.id !== id)
    setList(arr)

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {isAuthenticated ? <> <Profile /> <LogoutButton /> </> : <LoginButton />}
      </header>
      <div>
        <ToDo
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          tarea={tarea}
          list={list} />
        <div className='organizador'>
          {
            list.map(tarea => {
              return (
                <Tarea
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea}
                  handleUpdate={handleUpdate}
                  onDelete={onDelete} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
