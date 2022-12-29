import './App.css';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Input from './Components/Input'
import Views from './Components/Blog';
import UpdateView from './Components/UpdateView';
import DisplayBlog from './Components/DisplayBlog';
function App() {
  return (
        <>
          <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Views/>}/>
            <Route path='/createView' element={<Input/>}/>
            <Route path='/updateView/:id' element={<UpdateView/>}/>
            <Route path='/displayBlog/:id' element={<DisplayBlog/>}/>
          </Routes>
          </BrowserRouter>
        </>
  );
}

export default App;