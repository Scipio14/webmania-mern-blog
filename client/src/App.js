import './App.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import {Home,Login, Register,Create, BlogDetails, UpdateBlog} from './pages';
import {useSelector} from 'react-redux'


function App() {
  const {user} = useSelector(state=>state.auth)
  return (
    <div>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Navigate to="/login"/>}/>
        <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
        <Route path='/register' element={!user ? <Register/> : <Navigate to="/"/>}/>
        <Route path='/create' element={user ? <Create/> : <Navigate to="/login"/>}/>
        <Route path='/blogDetails/:id' element={user ? <BlogDetails/> : <Navigate to="/login"/>}/>
        <Route path='/updateBlog/:id' element={user ? <UpdateBlog/> : <Navigate to="/login"/>}/>
      </Routes>

     
    </div>
  );
}

export default App;
