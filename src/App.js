import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Career from './Components/Career/Career';
import ContactUs from './Components/ContactUs/ContactUs';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import ResponsibilityAndHealth from './Components/ResponsibilityAndHealth/ResponsibilityAndHealth';

function App() {
  return (
    <div>
      <Home></Home>
      <AboutUs></AboutUs>
      <Career></Career>
      <ResponsibilityAndHealth></ResponsibilityAndHealth>
      <ContactUs></ContactUs>
      <Products></Products>
    </div>
  );
}

export default App;
