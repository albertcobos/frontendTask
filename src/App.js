import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import { ShowTasks } from './components/ShowTasks';
import { CreateTask } from './components/CreateTask';
//import { EditTask} from './componentes/EditTask';
import { LoginTask } from './components/LoginTask';
//import { EndTask } from './components/EndTask';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginTask/>}/>
          <Route path='/show' element={<ShowTasks/>}/>
          <Route path='/create' element={<CreateTask/>}/> {/*llamamos al componente*/}
          {/*<Route path='/end/:id' element={<EndTask/>}/>*/}
          {/* <Route path='/edit/:id' element={<EditTask/>}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
