import { Route, Routes } from 'react-router-dom';
import './App.css';
import { First } from './components/First';
import { Home } from './components/Home';
import { Second } from './components/Second';
import { Users } from './components/Users';

function App() {
  return (
    <div className="main">
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path={`/registration/one`} element={<First/>}></Route>
         <Route path={`/registration/two`} element={<Second/>}></Route>
         <Route path={`/users`} element={<Users/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
