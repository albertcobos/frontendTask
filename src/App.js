import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import { ShowTasks } from './componentes/ShowTasks';
//import { CreateTask } from './componentes/CreateTask';
//import { EditTask} from './componentes/EditTask';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowTasks/>}/>
          {/* <Route path='/create' element={<CreateTask/>}/> */}
          {/* <Route path='/edit/:id' element={<EditTask/>}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
