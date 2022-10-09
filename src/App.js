import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar } from './Components/Navbar/Navbar';
import { LoginButton } from './Components/Login/Login';
import { LogoutButton } from './Components/Logout/Logout';
import { Profile } from './Components/Profile/Profile';
import { ToDo } from './Components/To-do/To-do';

function App() {

  const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {isAuthenticated ? <> <Profile/> <LogoutButton/> </> : <LoginButton/>}
      </header>
      <div>
        <div>
          <ToDo/>
        </div>
      </div>
    </div>
  );
}

export default App;
