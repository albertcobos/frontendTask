import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import { ShowTasks } from './components/ShowTasks';
import { CreateTask } from './components/CreateTask';
//import { EditTask} from './componentes/EditTask';
import { LoginTask } from './components/LoginTask';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginTask/>}/>
          <Route path='show' element={<ShowTasks/>}/>
          
          <Route path='/create' element={<CreateTask/>}/> 
          {/* <Route path='/edit/:id' element={<EditTask/>}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
