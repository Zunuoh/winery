import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/productscreen' element={<ProductScreen/>}/>
    </Routes>
   </BrowserRouter>
     

  );
}

export default App;
