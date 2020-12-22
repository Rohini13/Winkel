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
import Toy from './pages/Toy';
import About from './pages/About'
import Delivery from './pages/Delivery'
import Developers from './pages/Developers';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Provider store={store}>
          <NavBar />
          <Route exact path="/toydescription/:id" render={(props) =>
            <Toy id={props.match.params.id}/>
          }></Route>
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
          <Route exact path="/registered" render={() =>
            <Message msg={'User Registered'} />
          }></Route>
          <Route exact path="/logout" render={() =>
            <Message msg={'User Logged Out!'} />
          }></Route>
          <Route exact path="/about" render={() =>
            <About/>
          }></Route>
          <Route exact path="/developers" render={() =>
            <Developers />
          }></Route>
          <Route exact path="/delivery" render={() =>
            <Delivery />
          }></Route>
          <Footer />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
