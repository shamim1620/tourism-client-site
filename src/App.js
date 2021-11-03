import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Packages from './components/Packages/Packages';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import AddService from './components/AddService/AddService';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdatePakages from './components/UpdatePakages/UpdatePakages';
import Order from './components/Order/Order';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
              <Packages></Packages>
              <Blog></Blog>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Packages></Packages>
              <Blog></Blog>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>

            <Route path="/login">
              <Login></Login>

            </Route>
            <Route path="/packages">
              <Packages></Packages>

            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>

            </PrivateRoute>
            <PrivateRoute path="/update/:id">
              <UpdatePakages></UpdatePakages>
            </PrivateRoute>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/myorder">
              <Order></Order>
            </Route>
            <Route path="/about">
              <About></About>

            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
