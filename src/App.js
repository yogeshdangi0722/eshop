import Header from "./component/Header";
import Home from './pages/Home';
import Error from "./pages/Error";
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout'
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path='/' index element={<Home />}/>
            <Route path='*' element={<Error />} />
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/productpage/:id' element ={<ProductPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
