import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Editor from './component/Editor';

function App() {
  return (
    <>
    {/* <h1>Hello</h1> */}
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/editor/:roomId' element={<Editor/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
