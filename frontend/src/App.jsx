import Navbar from './components/navbar/Navbar'
import { Container } from './components/ui'
import { ProtectedRoute } from './components/ProtectedRoute'

import {Routes, Route, Outlet} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import TasksPage from "./pages/TasksPage"
import TaskFormPage from "./pages/TaskFormPage"
import ProfilePage from "./pages/ProfilePage"
import NotFound from './pages/NotFound'
import { useAuth } from './context/AuthContext'
import { TasksProvider } from './context/TaskContext'


const App = () => {
 const {isAuth, loading}=useAuth();

 if (loading)return <h1>
   Cargando...
 </h1>


  return (
    
       <>
       <Navbar/>

       <Container>
        <div className='py-5'>
     
        <Routes>
        <Route element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/tasks"/>}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        </Route> 

        <Route 
            element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login"/>}
            >
         <Route 
            element={
            <TasksProvider>
                  <Outlet/>
            </TasksProvider>  
            }>      

            <Route path='/tasks' element={<TasksPage />}/>
            <Route path='/tasks/new' element={<TaskFormPage />}/>
            <Route path='/tasks/:id/edit' element={<TaskFormPage />}/>
        </Route>

        <Route path='/profile' element={<ProfilePage />}/>

        <Route path='*' element={<NotFound/>}/>
         
        </Route>
        </Routes>
        </div>

        </Container>
       </>
    
  )
}

export default App