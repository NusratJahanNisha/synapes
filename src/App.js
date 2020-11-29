import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Career from './Components/Career/Career';
import ContactUs from './Components/ContactUs/ContactUs';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import ResponsibilityAndHealth from './Components/ResponsibilityAndHealth/ResponsibilityAndHealth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/career">
            <Career></Career>
          </Route>
          <Route path="/responsibilityAndHealth">
            <ResponsibilityAndHealth></ResponsibilityAndHealth>
          </Route>
          <Route path="/ContactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
