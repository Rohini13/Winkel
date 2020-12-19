import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MainPage from './pages/MainPage'
import AllItemsPage from './pages/AllItemsPage';
import StuffedAnimalsPage from './pages/StuffedAnimalsPage';
import WoodenToysPage from './pages/WoodenToysPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import store from './store'
import { Provider } from 'react-redux'
import history from './history'
import Message from './pages/Message';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Provider store={store}>
          <NavBar />
          <Route exact path="/main" render={() =>
            <MainPage />
          }></Route>
          <Route exact path="/allitems" render={() =>
            <AllItemsPage />
          }></Route>
          <Route exact path="/stuffedanimals" render={() =>
            <StuffedAnimalsPage />
          }></Route>
          <Route exact path="/woodentoys" render={() =>
            <WoodenToysPage />
          }></Route>
          <Route exact path="/register" render={() =>
            <RegisterPage />
          }></Route>
          <Route exact path="/login" render={() =>
            <LoginPage />
          }></Route>
          <Route exact path="/loggedin" render={() =>
            <Message msg={'You are now Logged in'} />
          }></Route>
          <Route exact path="/registered" render={() =>
            <Message msg={'User Registered'} />
          }></Route>
          <Route exact path="/logout" render={() =>
            <Message msg={'User Logged Out!'} />
          }></Route>
          <Footer />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
