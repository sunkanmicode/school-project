import Footer from './pages/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {  Switch, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';



function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route> 
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
         
      </Switch>
      <Footer />
    </BrowserRouter>
      
    </>
  );
}

export default App;
